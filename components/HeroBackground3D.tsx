"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    opacity: number;
    speed: number;
}

export default function HeroBackground3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const frameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Respect users who prefer reduced motion: render a single static frame.
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Scale work to the device — fewer particles on small / low-power screens.
        const isSmall = width < 768;
        const PARTICLE_COUNT = isSmall ? 55 : 95;
        const CONNECTION_DISTANCE = isSmall ? 110 : 140;
        const FOCAL_LENGTH = 600;
        const TARGET_FPS = 30;
        const FRAME_INTERVAL = 1000 / TARGET_FPS;

        const colors = [
            "rgba(130, 190, 255,",
            "rgba(160, 120, 255,",
            "rgba(80, 230, 255,",
            "rgba(210, 170, 255,",
        ];

        const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * 800 + 100,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2.5 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.5 + 0.5,
            speed: Math.random() * 0.4 + 0.1,
        }));

        const project = (x: number, y: number, z: number) => {
            const scale = FOCAL_LENGTH / (FOCAL_LENGTH + z);
            return {
                sx: (x - width / 2) * scale + width / 2,
                sy: (y - height / 2) * scale + height / 2,
                scale,
            };
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Dark gradient background
            const bg = ctx.createLinearGradient(0, 0, width, height);
            bg.addColorStop(0, "#04080f");
            bg.addColorStop(0.5, "#060b1c");
            bg.addColorStop(1, "#04080f");
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, width, height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;
            const cameraX = (mx - width / 2) * 0.05;
            const cameraY = (my - height / 2) * 0.05;

            // Update particles
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                p.z += p.speed;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
                if (p.z > 900) p.z = 100;

                const dx = p.x - width / 2;
                const dy = p.y - height / 2;
                p.x += dx * cameraX * 0.0002;
                p.y += dy * cameraY * 0.0002;
            });

            // Sort by Z for painter's algorithm (back to front)
            const sorted = [...particles].sort((a, b) => b.z - a.z);

            // Pre-project once per particle (avoids re-projecting inside the O(n²) loop)
            const projected = sorted.map((p) =>
                project(p.x - cameraX * 0.3, p.y - cameraY * 0.3, p.z)
            );

            // Draw connections — solid stroke (no per-pair gradient allocation)
            for (let i = 0; i < sorted.length; i++) {
                const proj1 = projected[i];
                for (let j = i + 1; j < sorted.length; j++) {
                    const proj2 = projected[j];
                    const dist = Math.hypot(proj1.sx - proj2.sx, proj1.sy - proj2.sy);
                    if (dist < CONNECTION_DISTANCE) {
                        const alpha =
                            (1 - dist / CONNECTION_DISTANCE) *
                            0.35 *
                            Math.min(proj1.scale, proj2.scale);
                        ctx.beginPath();
                        ctx.moveTo(proj1.sx, proj1.sy);
                        ctx.lineTo(proj2.sx, proj2.sy);
                        ctx.strokeStyle = `${sorted[i].color}${alpha})`;
                        ctx.lineWidth = proj1.scale * 1.2;
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            sorted.forEach((p, i) => {
                const { sx, sy, scale } = projected[i];
                const radius = p.size * scale * 1.5;
                const alpha = p.opacity * scale;

                // Glow
                const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius * 7);
                glow.addColorStop(0, `${p.color}${Math.min(alpha * 1.3, 1)})`);
                glow.addColorStop(0.3, `${p.color}${alpha * 0.8})`);
                glow.addColorStop(0.6, `${p.color}${alpha * 0.3})`);
                glow.addColorStop(1, `${p.color}0)`);
                ctx.beginPath();
                ctx.arc(sx, sy, radius * 7, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(sx, sy, radius, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${Math.min(alpha + 0.5, 1)})`;
                ctx.fill();
            });

            // 3D grid floor
            ctx.save();
            ctx.globalAlpha = 0.12;
            ctx.strokeStyle = "rgba(100, 160, 255, 1)";
            ctx.lineWidth = 0.5;
            const gridLines = 20;
            const gridZ = 500;
            for (let i = 0; i <= gridLines; i++) {
                const x1 = (i / gridLines) * width;
                const p1 = project(x1 - cameraX * 0.5, height, gridZ);
                const p2 = project(x1 - cameraX * 0.5, 0, 0);
                ctx.beginPath();
                ctx.moveTo(p1.sx, p1.sy);
                ctx.lineTo(p2.sx, p2.sy);
                ctx.stroke();
            }
            for (let j = 0; j <= gridLines; j++) {
                const y1 = (j / gridLines) * height;
                const p1 = project(0 - cameraX * 0.5, y1, gridZ);
                const p2 = project(width - cameraX * 0.5, y1, gridZ);
                ctx.beginPath();
                ctx.moveTo(p1.sx, p1.sy);
                ctx.lineTo(p2.sx, p2.sy);
                ctx.stroke();
            }
            ctx.restore();

            // Vignette
            const vignette = ctx.createRadialGradient(
                width / 2, height / 2, height * 0.4,
                width / 2, height / 2, height * 1.1
            );
            vignette.addColorStop(0, "transparent");
            vignette.addColorStop(1, "rgba(2,4,8,0.35)");
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, width, height);
        };

        // --- Animation loop: FPS-capped + paused when off-screen / tab hidden ---
        let running = false;
        let lastTime = 0;

        const loop = (time: number) => {
            frameRef.current = requestAnimationFrame(loop);
            if (time - lastTime < FRAME_INTERVAL) return;
            lastTime = time;
            draw();
        };

        const start = () => {
            if (running) return;
            running = true;
            lastTime = 0;
            frameRef.current = requestAnimationFrame(loop);
        };

        const stop = () => {
            if (!running) return;
            running = false;
            cancelAnimationFrame(frameRef.current);
        };

        // Only animate while the Hero (top of the page) is on screen.
        const updateActivity = () => {
            const heroVisible = window.scrollY < window.innerHeight;
            if (heroVisible && !document.hidden) start();
            else stop();
        };

        const onScroll = () => updateActivity();

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            if (reduceMotion) draw();
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        if (reduceMotion) {
            // Static single frame — no continuous animation.
            draw();
        } else {
            window.addEventListener("scroll", onScroll, { passive: true });
            window.addEventListener("mousemove", onMouseMove, { passive: true });
            document.addEventListener("visibilitychange", updateActivity);
            updateActivity();
        }
        window.addEventListener("resize", onResize);

        return () => {
            stop();
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("visibilitychange", updateActivity);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-20"
            style={{ display: "block" }}
        />
    );
}
