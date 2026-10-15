
import type { ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { developer } from "@/lib/data";

type WhatsAppButtonProps = {
  children?: ReactNode;
  className?: string;
};

export default function WhatsAppButton({
  children = "Chat on WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const message =
    "Hi! I found your portfolio and would like to discuss a website or mobile app project.";

  const url = `https://wa.me/${developer.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#52C4B8] px-5 py-3.5 text-sm font-semibold text-[#071411] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6ad7ca] ${className}`}
    >
      <MessageCircle size={18} />
      <span>{children}</span>
      <ArrowRight size={16} />
    </a>
  );
}
