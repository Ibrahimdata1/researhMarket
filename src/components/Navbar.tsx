"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#overview", label: "ภาพรวม" },
  { href: "#sectors", label: "แต่ละวงการ" },
  { href: "#competitors", label: "ตารางคู่แข่ง" },
  { href: "#strategy", label: "แผนธุรกิจ" },
  { href: "#halal", label: "ฮาลาล & อาชีพ" },
  { href: "#sources", label: "แหล่งข้อมูล" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-accent font-mono">&gt;_</span>
          <span className="gradient-text">RunawayTech</span>
          <span className="text-muted text-xs font-normal ml-1 hidden sm:inline">Market Intelligence</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="text-muted hover:text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-3 py-2.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface-light transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
