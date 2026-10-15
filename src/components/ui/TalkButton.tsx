"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

export default function TalkButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "251994027828";
  const telegramUsername = "bpac12";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#52C4B8] px-6 py-3 font-semibold text-[#06121C] transition hover:scale-[1.02] hover:bg-[#67D5C9]"
      >
        Let&apos;s Talk
        <MessageCircle size={18} />
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close contact menu"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />

          <div className="absolute bottom-full left-0 z-50 mb-3 w-64 rounded-2xl border border-white/10 bg-[#0B1424] p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-white">Let&apos;s connect</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl border border-white/10 p-3 text-white transition hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
              >
                <MessageCircle size={20} className="text-[#25D366]" />
                <span>
                  <span className="block font-medium">WhatsApp</span>
                  <span className="text-xs text-gray-400">
                    Chat with me directly
                  </span>
                </span>
              </a>

              <a
                href={`https://t.me/${telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl border border-white/10 p-3 text-white transition hover:border-[#229ED9]/50 hover:bg-[#229ED9]/10"
              >
                <Send size={20} className="text-[#229ED9]" />
                <span>
                  <span className="block font-medium">Telegram</span>
                  <span className="text-xs text-gray-400">
                    Message me on Telegram
                  </span>
                </span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}