"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { developer } from "@/lib/data";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.62 5.23-5.11 5.5.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.98V9h2.95v9.45ZM6.46 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74h-2.94v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.19-1.76 2.43v4.68H9.3V9h2.82v1.29h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.52 1.95 3.52 4.49v5.2Z" />
    </svg>
  );
}

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="section-divider py-7 sm:py-8">
        <div className="container-width">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <a
              href="#home"
              aria-label={`${developer.name} - Home`}
              className="flex min-w-0 items-center gap-3 self-start"
            >
              <span className="relative h-10 w-10 shrink-0">
                <Image
                  src="/logo.png"
                  alt={`${developer.name} logo`}
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </span>

              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold">
                  {developer.name}
                </span>
                <span
                  className="mt-1 block text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  Full-Stack Developer
                </span>
              </span>
            </a>

            <p
              className="text-xs leading-5 md:text-center"
              style={{ color: "var(--muted)" }}
            >
              © {year ?? "2026"} {developer.name}. Built with care.
            </p>

            <div className="flex items-center justify-between gap-4 md:justify-end">
              <div className="flex items-center gap-3">
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[var(--surface)] hover:text-[#52C4B8]"
                >
                  <GitHubIcon />
                </a>

                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[var(--surface)] hover:text-[#52C4B8]"
                >
                  <LinkedInIcon />
                </a>
              </div>

              <a
                href="#home"
                aria-label="Back to top"
                className="flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-[#52C4B8] hover:text-[#52C4B8]"
                style={{ borderColor: "var(--border)" }}
              >
                <ArrowUp size={17} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
        <WhatsAppButton className="flex min-h-11 items-center justify-center rounded-full px-4 py-3 text-sm shadow-[0_8px_35px_rgba(82,196,184,0.18)] transition hover:-translate-y-0.5 sm:px-5">
          <span className="hidden sm:inline">Let&apos;s Talk</span>
          <span className="sm:hidden">WhatsApp</span>
        </WhatsAppButton>
      </div>
    </>
  );
}