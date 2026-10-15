
import { CheckCircle2, Code2, Layers3, Smartphone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { developer } from "@/lib/data";

const strengths = [
  {
    icon: Code2,
    title: "Clean code",
    description: "Readable, maintainable, and thoughtfully structured.",
  },
  {
    icon: Layers3,
    title: "Full-stack thinking",
    description: "Frontend, backend, data, and integration working together.",
  },
  {
    icon: Smartphone,
    title: "Product focused",
    description: "Solutions designed around real user and business needs.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding section-divider">
      <div className="container-width grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About me"
            title={
              <>
                Engineering with{" "}
                <span className="accent-text">purpose.</span>
              </>
            }
          />

          <p
            className="text-base leading-8"
            style={{ color: "var(--muted)" }}
          >
            I enjoy turning ideas and complex requirements into practical
            digital products. My approach combines thoughtful interface
            design, reliable backend engineering, and an emphasis on software
            that solves real problems.
          </p>

          <p
            className="mt-5 text-base leading-8"
            style={{ color: "var(--muted)" }}
          >
            Whether it is a business website, a mobile application, or a custom
            management system, I focus on understanding the goal first and
            choosing technology that serves it.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#52C4B8]/10 text-[#52C4B8]">
              <CheckCircle2 size={19} />
            </span>
            <div>
              <p className="text-sm font-medium">
                {developer.availability}
              </p>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                Open to freelance and project-based work
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <div
                key={strength.title}
                className="surface flex gap-5 rounded-xl p-5 sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#52C4B8]/10 text-[#52C4B8]">
                  <Icon size={21} />
                </span>

                <div>
                  <h3 className="font-semibold">{strength.title}</h3>
                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: "var(--muted)" }}
                  >
                    {strength.description}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="surface rounded-xl p-5 sm:p-6">
            <p className="code-font mb-4 text-xs tracking-widest accent-text">
              // TECHNOLOGIES I WORK WITH
            </p>

            <div className="flex flex-wrap gap-2">
              {developer.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border px-3 py-2 text-xs"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
