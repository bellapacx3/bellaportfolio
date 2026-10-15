
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "mx-auto text-center" : ""}`}>
      <p className="code-font mb-4 text-xs tracking-[0.2em] accent-text">
        // {eyebrow.toUpperCase()}
      </p>

      <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
