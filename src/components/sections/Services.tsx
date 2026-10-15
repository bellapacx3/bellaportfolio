
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section-padding section-divider">
      <div className="container-width">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              From the first idea to{" "}
              <span className="accent-text">the final product.</span>
            </>
          }
          description="Practical development services for businesses, founders, and teams that want to build useful digital products."
        />

        <div className="grid gap-4">
          {services.map((service) => (
            <a
              key={service.number}
              href="#contact"
              className="surface group grid gap-5 rounded-xl p-6 transition duration-300 hover:border-[#52C4B8]/50 sm:grid-cols-[60px_1fr_auto] sm:items-center sm:p-8"
            >
              <span className="code-font text-sm accent-text">
                {service.number}
              </span>

              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  {service.title}
                </h3>
                <p
                  className="mt-2 max-w-2xl text-sm leading-6"
                  style={{ color: "var(--muted)" }}
                >
                  {service.description}
                </p>
                <p className="code-font mt-4 text-[11px] accent-text">
                  {service.technologies}
                </p>
              </div>

              <span
                className="hidden h-10 w-10 items-center justify-center rounded-full border transition group-hover:border-[#52C4B8] group-hover:text-[#52C4B8] sm:flex"
                style={{ borderColor: "var(--border)" }}
              >
                <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
