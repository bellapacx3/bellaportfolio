"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Mail, MessageCircle, Send, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { developer } from "@/lib/data";

export default function Contact() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!contactMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setContactMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [contactMenuOpen]);

  const message =
    "Hi! I found your portfolio and would like to discuss a website or mobile app project.";

  const whatsappUrl = `https://wa.me/${developer.whatsapp}?text=${encodeURIComponent(message)}`;

  // Replace with your actual Telegram username, without @.
  const telegramUsername = "bpac12";
  const telegramUrl = `https://t.me/${telegramUsername}`;

  const contactMenu =
    mounted && contactMenuOpen
      ? createPortal(
          <>
            <button
              type="button"
              aria-label="Close contact menu"
              onClick={() => setContactMenuOpen(false)}
              className="fixed inset-0 z-[9998] cursor-default bg-black/30 backdrop-blur-[2px]"
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-label="Choose a contact method"
              className="fixed left-1/2 top-1/2 z-[9999] w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-4 shadow-2xl"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                maxHeight: "calc(100dvh - 2rem)",
                overflowY: "auto",
              }}
            >
              <div className="mb-3 flex items-center justify-between gap-3 px-1 py-1">
                <div>
                  <h3 className="text-base font-semibold">Let&apos;s connect</h3>
                  <p
                    className="mt-1 text-sm"
                    style={{ color: "var(--muted)" }}
                  >
                    Choose your preferred app.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setContactMenuOpen(false)}
                  className="rounded-lg p-2 transition hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setContactMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-4 text-sm transition hover:bg-[#25D366]/10"
              >
                <MessageCircle
                  size={22}
                  className="shrink-0 text-[#25D366]"
                />
                <span>
                  <span className="block font-medium">WhatsApp</span>
                  <span
                    className="mt-1 block text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    Chat with me directly
                  </span>
                </span>
                <ArrowUpRight size={16} className="ml-auto shrink-0" />
              </a>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setContactMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-4 text-sm transition hover:bg-[#229ED9]/10"
              >
                <Send size={22} className="shrink-0 text-[#229ED9]" />
                <span>
                  <span className="block font-medium">Telegram</span>
                  <span
                    className="mt-1 block text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    Message me on Telegram
                  </span>
                </span>
                <ArrowUpRight size={16} className="ml-auto shrink-0" />
              </a>
            </div>
          </>,
          document.body
        )
      : null;

  return (
    <section id="contact" className="section-padding section-divider">
      <div className="container-width">
        <div
          className="relative overflow-hidden rounded-3xl border p-7 sm:p-12 lg:p-16"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(82,196,184,0.10)" }}
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title={
                  <>
                    Have an idea?
                    <br />
                    <span className="accent-text">Let&apos;s build it.</span>
                  </>
                }
                description="Tell me about your business, website, or app idea. Let's discuss your requirements and find the right way to bring it to life."
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${developer.email}`}
                  className="inline-flex items-center gap-2 text-sm transition hover:text-[#52C4B8]"
                >
                  <Mail size={17} />
                  {developer.email}
                  <ArrowUpRight size={14} />
                </a>

                <span
                  className="hidden h-4 w-px sm:block"
                  style={{ background: "var(--border)" }}
                />

                <span className="text-sm" style={{ color: "var(--muted)" }}>
                  {developer.location}
                </span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setContactMenuOpen((open) => !open)}
                aria-expanded={contactMenuOpen}
                aria-haspopup="dialog"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#52C4B8] px-5 py-3.5 text-sm font-semibold text-[#071411] transition hover:-translate-y-0.5 hover:bg-[#6ad7ca] sm:w-auto"
              >
                {contactMenuOpen ? (
                  <X size={18} />
                ) : (
                  <MessageCircle size={18} />
                )}
                Let&apos;s Talk
              </button>

              <p
                className="mt-3 text-center text-xs sm:text-left"
                style={{ color: "var(--muted)" }}
              >
                Usually the quickest way to reach me.
              </p>
            </div>
          </div>
        </div>
      </div>

      {contactMenu}
    </section>
  );
}