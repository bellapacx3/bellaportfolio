"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Send, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { developer } from "@/lib/data";

export default function Contact() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);

  const message =
    "Hi! I found your portfolio and would like to discuss a website or mobile app project.";

  const whatsappUrl = `https://wa.me/${developer.whatsapp}?text=${encodeURIComponent(message)}`;

  // Replace with your actual Telegram username, without @.
  const telegramUsername = "YOUR_TELEGRAM_USERNAME";
  const telegramUrl = `https://t.me/${telegramUsername}`;

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

            <div className="relative">
              <button
                type="button"
                onClick={() => setContactMenuOpen((open) => !open)}
                aria-expanded={contactMenuOpen}
                aria-haspopup="dialog"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#52C4B8] px-5 py-3.5 text-sm font-semibold text-[#071411] transition hover:-translate-y-0.5 hover:bg-[#6ad7ca] sm:w-auto"
              >
                {contactMenuOpen ? <X size={18} /> : <MessageCircle size={18} />}
                Let&apos;s Talk
              </button>

              {contactMenuOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close contact menu"
                    onClick={() => setContactMenuOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />

                  <div
                    role="dialog"
                    aria-label="Choose a contact method"
                    className="fixed bottom-24 left-1/2 z-50 w-72 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border p-3 shadow-2xl sm:absolute sm:bottom-full sm:left-auto sm:right-0 sm:mb-3 sm:w-64 sm:max-w-[90vw] sm:translate-x-0"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="mb-2 flex items-center justify-between px-1 py-1">
                      <div>
                        <h3 className="text-sm font-semibold">
                          Let&apos;s connect
                        </h3>
                        <p
                          className="mt-1 text-xs"
                          style={{ color: "var(--muted)" }}
                        >
                          Choose your preferred app.
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setContactMenuOpen(false)}
                        className="rounded-lg p-1 transition hover:bg-white/10"
                      >
                        <X size={17} />
                      </button>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setContactMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-[#25D366]/10"
                    >
                      <MessageCircle
                        size={20}
                        className="shrink-0 text-[#25D366]"
                      />
                      <span>
                        <span className="block font-medium">WhatsApp</span>
                        <span
                          className="block text-xs"
                          style={{ color: "var(--muted)" }}
                        >
                          Chat with me directly
                        </span>
                      </span>
                    </a>

                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setContactMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-[#229ED9]/10"
                    >
                      <Send
                        size={20}
                        className="shrink-0 text-[#229ED9]"
                      />
                      <span>
                        <span className="block font-medium">Telegram</span>
                        <span
                          className="block text-xs"
                          style={{ color: "var(--muted)" }}
                        >
                          Message me on Telegram
                        </span>
                      </span>
                    </a>
                  </div>
                </>
              )}

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
    </section>
  );
}