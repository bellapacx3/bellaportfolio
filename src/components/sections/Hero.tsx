"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import CodeWindow from "@/components/ui/CodeWindow";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const specialties = ["Web Apps", "Mobile Apps", "Custom Software"];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-glow relative isolate flex min-h-[calc(100svh-64px)] items-center overflow-hidden sm:min-h-[calc(100svh-76px)]"
    >
      <div className="grid-pattern pointer-events-none absolute inset-0 -z-10" />

      <div className="container-width grid w-full grid-cols-1 items-center gap-10 py-12 sm:gap-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20 xl:gap-16 xl:py-24">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-5 flex items-center gap-3 sm:mb-7">
            <span className="h-px w-7 shrink-0 bg-[#52C4B8] sm:w-8" />
            <p className="code-font text-[10px] tracking-[0.14em] accent-text sm:text-xs sm:tracking-[0.16em]">
              // FULL-STACK DEVELOPER
            </p>
          </div>

          <h1 className="max-w-3xl text-[clamp(2.4rem,7.5vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-6xl xl:text-7xl">
            Building Digital{" "}
            <span className="accent-text">Experiences</span>{" "}
            That Matter
          </h1>

          <p
            className="mt-5 max-w-xl text-sm leading-7 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
            style={{ color: "var(--muted)" }}
          >
            Crafting elegant solutions with modern technologies. I build
            professional websites, mobile applications, and scalable software
            that solve real-world problems.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
            <a
              href="#projects"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#52C4B8] px-5 py-3 text-sm font-semibold text-[#071411] transition hover:-translate-y-0.5 hover:bg-[#6ad7ca] min-[420px]:w-auto sm:px-6"
            >
              View Projects
              <ArrowRight size={17} />
            </a>

            <WhatsAppButton className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-[var(--border)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[#52C4B8] hover:bg-[rgba(82,196,184,0.08)] min-[420px]:w-auto sm:px-6">
              Get in Touch
            </WhatsAppButton>
          </div>

          <div
            className="mt-8 border-t pt-5 sm:mt-10 sm:pt-6"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="mb-4 text-[10px] tracking-[0.14em] sm:mb-3 sm:text-xs"
              style={{ color: "var(--muted)" }}
            >
              SPECIALIZING IN
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-7">
              {specialties.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div
            className="pointer-events-none absolute -inset-3 rounded-3xl opacity-50 blur-2xl sm:-inset-5 sm:opacity-60 sm:blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(82,196,184,0.12), transparent 70%)",
            }}
          />

          <div className="relative min-w-0">
            <CodeWindow />
          </div>

          <div
            className="absolute -bottom-4 right-2 hidden max-w-[calc(100%-1rem)] items-center gap-2 rounded-xl border px-4 py-3 shadow-xl sm:flex lg:-right-2"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#52C4B8]" />
            <span
              className="text-xs"
              style={{ color: "var(--muted)" }}
            >
              Turning ideas into reality
            </span>
          </div>
        </motion.div>

        <a
          href="#projects"
          className="hidden items-center justify-center gap-2 pt-1 text-xs tracking-widest transition-colors hover:text-[#52C4B8] lg:inline-flex"
          style={{ color: "var(--muted)" }}
        >
          SCROLL TO EXPLORE
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}