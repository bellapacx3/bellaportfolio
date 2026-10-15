
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, ShoppingBag, Smartphone } from "lucide-react";

type ProjectCardProps = {
  project: {
    number: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    initials: string;
    gradient: string;
    visual: string;
    liveUrl: string;
    githubUrl: string;
  };
};

function ProjectPreview({ visual }: { visual: string }) {
  if (visual === "commerce") {
    return (
      <div className="mx-auto w-full max-w-[260px] rounded-xl border border-white/10 bg-[#0d1117] p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white">nexa.</span>
          <ShoppingBag size={15} className="text-[#52C4B8]" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-lg bg-[#18232b] p-2">
              <div className="mb-2 flex h-14 items-center justify-center rounded bg-[#233b3b]">
                <span className="text-lg text-[#52C4B8]">✳</span>
              </div>
              <div className="h-1.5 w-4/5 rounded bg-white/30" />
              <div className="mt-2 h-1.5 w-2/5 rounded bg-[#52C4B8]/70" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual === "analytics") {
    return (
      <div className="mx-auto w-full max-w-[270px] rounded-xl border border-white/10 bg-[#0d1117] p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-white">Overview</span>
          <BarChart3 size={16} className="text-[#52C4B8]" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {["Revenue", "Growth"].map((item) => (
            <div key={item} className="rounded-lg bg-[#18232b] p-3">
              <p className="text-[9px] text-slate-400">{item}</p>
              <p className="mt-2 text-lg font-semibold text-white">
                {item === "Revenue" ? "$24.8k" : "+18.6%"}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex h-20 items-end gap-2 rounded-lg bg-[#18232b] px-3 pt-3">
          {[35, 58, 44, 78, 53, 90, 67, 100, 74, 86].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-sm bg-[#52C4B8]/80"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[270px] justify-center">
      <div className="w-[155px] rounded-[25px] border-[5px] border-[#28343c] bg-[#0d1117] p-3 shadow-2xl">
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-white/20" />
        <div className="rounded-xl bg-[#18232b] p-3">
          <div className="text-[10px] text-slate-400">Welcome back</div>
          <div className="mt-2 text-sm font-bold text-white">Your day.</div>
          <div className="mt-4 rounded-lg bg-[#52C4B8]/15 p-3">
            <Smartphone size={17} className="text-[#52C4B8]" />
            <div className="mt-2 h-1 w-12 rounded bg-white/30" />
            <div className="mt-2 h-1 w-8 rounded bg-white/15" />
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
      className="surface group overflow-hidden rounded-2xl"
    >
      <div
        className={`relative flex h-[250px] items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient} p-6`}
      >
        <div className="absolute left-5 top-5 code-font text-xs text-white/45">
          {project.number} / CONCEPT
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,196,184,0.08),transparent_65%)]" />
        <div className="relative z-10 w-full transition duration-500 group-hover:scale-[1.03]">
          <ProjectPreview visual={project.visual} />
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="code-font text-[10px] tracking-[0.15em] accent-text">
            {project.category.toUpperCase()}
          </span>
          <span className="rounded-full border border-[#52C4B8]/20 px-2.5 py-1 text-[9px] tracking-wide text-[#52C4B8]">
            SAMPLE CONCEPT
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p
          className="mt-3 min-h-[72px] text-sm leading-6"
          style={{ color: "var(--muted)" }}
        >
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border px-2.5 py-1.5 text-[11px]"
              style={{
                color: "var(--muted)",
                borderColor: "var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex gap-4 border-t pt-5"
            style={{ borderColor: "var(--border)" }}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition hover:text-[#52C4B8]"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition hover:text-[#52C4B8]"
              >
                Source Code <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
