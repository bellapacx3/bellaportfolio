"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { developer } from "@/lib/data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = useCallback(() => {
    setLightMode((current) => !current);
  }, []);

  const handleNavigation = useCallback((href: string) => {
    const sectionId = href.slice(1);
    setActiveSection(sectionId);
    setMenuOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", href);
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;

    const shouldUseLight =
      savedTheme === "light" || (!savedTheme && prefersLight);

    setLightMode(shouldUseLight);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light-theme", lightMode);
    localStorage.setItem(
      "portfolio-theme",
      lightMode ? "light" : "dark",
    );

    return () => {
      document.body.classList.remove("light-theme");
    };
  }, [lightMode]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    const hash = window.location.hash.slice(1);

    if (hash && sections.some((section) => section.id === hash)) {
      setActiveSection(hash);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "color-mix(in srgb, var(--background) 95%, transparent)",
        borderColor: "var(--border)",
      }}
    >
      <nav
        className="container-width flex h-16 items-center justify-between gap-3 sm:h-[76px]"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          aria-label={`${developer.name} - Home`}
          onClick={(event) => {
            event.preventDefault();
            handleNavigation("#home");
          }}
          className="flex min-w-0 shrink items-center"
        >
          <span className="relative block h-14 w-14 shrink-0 sm:h-16 sm:w-16">
            <Image
              src="/logo.png"
              alt={`${developer.name} logo`}
              fill
              priority
              sizes="64px"
              className="object-contain"
            />
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(link.href);
                }}
                aria-current={isActive ? "location" : undefined}
                className="group relative py-2 text-sm transition-colors duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--muted)",
                }}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ background: "var(--accent)" }}
                />
              </a>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              lightMode ? "Switch to dark mode" : "Switch to light mode"
            }
            className="relative z-[60] flex h-10 w-10 touch-manipulation items-center justify-center rounded-full border transition hover:border-[#52C4B8] hover:text-[#52C4B8]"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {lightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("#contact");
            }}
            className="hidden rounded-lg border px-3 py-2 text-sm font-medium transition hover:border-[#52C4B8] hover:text-[#52C4B8] lg:inline-flex"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="relative z-[60] flex h-10 w-10 touch-manipulation items-center justify-center rounded-lg border transition hover:border-[#52C4B8] md:hidden"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full z-50 overflow-hidden border-b shadow-xl transition-[max-height,opacity,visibility] duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "visible max-h-[420px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
        style={{
          background: "var(--background)",
          borderColor: "var(--border)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="container-width flex flex-col py-2">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(link.href);
                }}
                aria-current={isActive ? "location" : undefined}
                className="flex min-h-12 items-center justify-between border-b py-3 text-sm transition-colors last:border-b-0"
                style={{
                  borderColor: "var(--border)",
                  color: isActive ? "var(--accent)" : "var(--muted)",
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("#contact");
            }}
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-lg border px-4 py-3 text-sm font-medium transition hover:border-[#52C4B8] hover:text-[#52C4B8]"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}