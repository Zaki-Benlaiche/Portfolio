"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    z: number;
    baseX: number;
    baseY: number;
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

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const PARTICLE_COUNT = 120;
        const CONNECTION_DISTANCE = 140;
        const FOCAL_LENGTH = 600;

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
            baseX: Math.random() * width,
            baseY: Math.random() * height,
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

            // Slightly brighter dark gradient background
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

                // Mouse parallax - subtle push from camera angle
                const dx = p.x - width / 2;
                const dy = p.y - height / 2;
                p.x += (dx * cameraX * 0.0002);
                p.y += (dy * cameraY * 0.0002);
            });

            // Sort by Z for painter's algorithm (back to front)
            const sorted = [...particles].sort((a, b) => b.z - a.z);

            // Draw connections first
            for (let i = 0; i < sorted.length; i++) {
                const p1 = sorted[i];
                const proj1 = project(p1.x - cameraX * 0.3, p1.y - cameraY * 0.3, p1.z);

                for (let j = i + 1; j < sorted.length; j++) {
                    const p2 = sorted[j];
                    const proj2 = project(p2.x - cameraX * 0.3, p2.y - cameraY * 0.3, p2.z);

                    const dist = Math.hypot(proj1.sx - proj2.sx, proj1.sy - proj2.sy);
                    if (dist < CONNECTION_DISTANCE) {
                        const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35 * Math.min(proj1.scale, proj2.scale);
                        const grad = ctx.createLinearGradient(proj1.sx, proj1.sy, proj2.sx, proj2.sy);
                        grad.addColorStop(0, `${p1.color}${alpha})`);
                        grad.addColorStop(1, `${p2.color}${alpha})`);
                        ctx.beginPath();
                        ctx.moveTo(proj1.sx, proj1.sy);
                        ctx.lineTo(proj2.sx, proj2.sy);
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = proj1.scale * 1.2;
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            sorted.forEach((p) => {
                const { sx, sy, scale } = project(p.x - cameraX * 0.3, p.y - cameraY * 0.3, p.z);
                const radius = p.size * scale * 1.5;
                const alpha = p.opacity * scale;

                // Glow effect — larger and brighter
                const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius * 7);
                glow.addColorStop(0, `${p.color}${Math.min(alpha * 1.3, 1)})`);
                glow.addColorStop(0.3, `${p.color}${alpha * 0.8})`);
                glow.addColorStop(0.6, `${p.color}${alpha * 0.3})`);
                glow.addColorStop(1, `${p.color}0)`);
                ctx.beginPath();
                ctx.arc(sx, sy, radius * 7, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                // Core dot — brighter
                ctx.beginPath();
                ctx.arc(sx, sy, radius, 0, Math.PI * 2);
                ctx.fillStyle = `${p.color}${Math.min(alpha + 0.5, 1)})`;
                ctx.fill();
            });

            // 3D Grid Perspective floor
            ctx.save();
            ctx.globalAlpha = 0.12;
            const gridLines = 20;
            const gridZ = 500;
            for (let i = 0; i <= gridLines; i++) {
                const t = i / gridLines;
                const x1 = t * width;
                const p1 = project(x1 - cameraX * 0.5, height, gridZ);
                const p2 = project(x1 - cameraX * 0.5, 0, 0);
                ctx.beginPath();
                ctx.moveTo(p1.sx, p1.sy);
                ctx.lineTo(p2.sx, p2.sy);
                ctx.strokeStyle = "rgba(100, 160, 255, 1)";
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
            for (let j = 0; j <= gridLines; j++) {
                const t = j / gridLines;
                const y1 = t * height;
                const p1 = project(0 - cameraX * 0.5, y1, gridZ);
                const p2 = project(width - cameraX * 0.5, y1, gridZ);
                ctx.beginPath();
                ctx.moveTo(p1.sx, p1.sy);
                ctx.lineTo(p2.sx, p2.sy);
                ctx.strokeStyle = "rgba(100, 160, 255, 1)";
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
            ctx.restore();

            // Vignette overlay — much lighter to reveal the background
            const vignette = ctx.createRadialGradient(
                width / 2, height / 2, height * 0.4,
                width / 2, height / 2, height * 1.1
            );
            vignette.addColorStop(0, "transparent");
            vignette.addColorStop(1, "rgba(2,4,8,0.35)");
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, width, height);

            frameRef.current = requestAnimationFrame(draw);
        };

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", onResize);
        window.addEventListener("mousemove", onMouseMove);
        frameRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(frameRef.current);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("mousemove", onMouseMove);
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
