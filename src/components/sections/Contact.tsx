
import { ArrowUpRight, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { developer } from "@/lib/data";

export default function Contact() {
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
              <WhatsAppButton className="w-full sm:w-auto">
                Chat With Me on WhatsApp
              </WhatsAppButton>
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
