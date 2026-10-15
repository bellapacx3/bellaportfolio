
"use client";

import { motion } from "framer-motion";
import { Code2, Minus, Square, X } from "lucide-react";
import { developer } from "@/lib/data";

export default function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="surface relative overflow-hidden rounded-2xl shadow-2xl"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(82,196,184,0.09), transparent 45%)",
        }}
      />

      <div
        className="relative flex items-center justify-between border-b px-4 py-4 sm:px-5"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex items-center gap-2 text-xs"
          style={{ color: "var(--muted)" }}
        >
          <Code2 size={14} />
          <span className="code-font">developer.ts</span>
        </div>

        <div className="hidden items-center gap-2 sm:flex"
          style={{ color: "var(--muted)" }}
        >
          <Minus size={13} />
          <Square size={11} />
          <X size={13} />
        </div>
      </div>

      <div className="relative flex">
        <div
          className="code-font select-none border-r px-3 py-6 text-right text-xs leading-8 sm:px-4"
          style={{
            color: "var(--muted)",
            borderColor: "var(--border)",
            opacity: 0.65,
          }}
        >
          {Array.from({ length: 14 }, (_, i) => (
            <div key={i}>{String(i + 1).padStart(2, "0")}</div>
          ))}
        </div>

        <div className="code-font min-w-0 flex-1 overflow-x-auto px-4 py-6 text-[11px] leading-8 sm:px-6 sm:text-sm">
          <div>
            <span className="code-purple">const</span>{" "}
            <span className="code-blue">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-white">{"{"}</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-white">name:</span>{" "}
            <span className="code-green">
              &apos;{developer.name}&apos;
            </span>
            <span className="text-white">,</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-white">role:</span>{" "}
            <span className="code-green">
              &apos;{developer.role}&apos;
            </span>
            <span className="text-white">,</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-white">skills:</span>{" "}
            <span className="text-white">[</span>
          </div>

          {developer.skills.slice(0, 4).map((skill, index) => (
            <div key={skill} className="pl-8 sm:pl-12">
              <span className="code-green">&apos;{skill}&apos;</span>
              {index < Math.min(developer.skills.length, 4) - 1 && (
                <span className="text-white">,</span>
              )}
            </div>
          ))}

          <div className="pl-4 sm:pl-6">
            <span className="text-white">],</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-white">passion:</span>{" "}
            <span className="code-green">&apos;Clean Code&apos;</span>
            <span className="text-white">,</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-white">location:</span>{" "}
            <span className="code-green">
              &apos;{developer.location}&apos;
            </span>
            <span className="text-white">,</span>
          </div>

          <div className="pl-4 sm:pl-6">
            <span className="text-white">status:</span>{" "}
            <span className="code-green">
              &apos;{developer.availability}&apos;
            </span>
          </div>

          <div className="text-white">{"};"}</div>

          <div className="mt-4 code-comment">
            {"// Turning ideas into working products."}
          </div>
        </div>
      </div>

      <div
        className="relative flex flex-wrap items-center justify-between gap-3 border-t px-4 py-4 sm:px-5"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-2 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#52C4B8] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#52C4B8]" />
          </span>
          <span style={{ color: "var(--muted)" }}>
            {developer.availability}
          </span>
        </div>

        <span className="code-font text-xs code-comment">
          TypeScript · UTF-8
        </span>
      </div>
    </motion.div>
  );
}
