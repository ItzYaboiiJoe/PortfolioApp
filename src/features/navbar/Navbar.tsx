"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/JSLogo.png"
              alt="Joseph Seoudy Logo"
              width={36}
              height={36}
              className="rounded-lg"
              loading="eager"
            />

            <span className="font-semibold text-white">Joseph Seoudy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a
              href="#projects"
              className="text-white/70 transition-colors hover:text-white"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-white/70 transition-colors hover:text-white"
            >
              Skills
            </a>

            <a
              href="#about"
              className="text-white/70 transition-colors hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-white/70 transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col gap-4 border-t border-white/10 py-4 text-sm">
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#skills"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Skills
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  About
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
