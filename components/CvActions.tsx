"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function CvActions() {
  return (
    <div className="print-hidden w-full max-w-3xl mx-auto mb-5 flex items-center justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
      >
        <ArrowLeft size={16} /> Back to site
      </Link>
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
      >
        <Printer size={16} /> Download PDF
      </button>
    </div>
  );
}
