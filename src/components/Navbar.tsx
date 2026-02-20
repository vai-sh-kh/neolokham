"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/brochure", label: "BROCHURES" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0, top: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const activeIndex = NAV_LINKS.findIndex(
      (link) =>
        (link.href === "/" && pathname === "/") ||
        (link.href !== "/" && pathname.startsWith(link.href)),
    );
    const el = activeIndex >= 0 ? linkRefs.current[activeIndex] : null;
    if (el && navRef.current) {
      const container = navRef.current.getBoundingClientRect();
      const link = el.getBoundingClientRect();
      setUnderline({
        left: link.left - container.left,
        width: link.width,
        top: link.bottom - container.top + 2,
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#3a4538]/90 via-[#4a5542]/85 to-[#6b7356]/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-18 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">pets</span>
            </div>
            <h1 className="text-xl font-[800] tracking-tight text-slate-100 uppercase">
              NEOLOKAM
            </h1>
          </Link>
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-8 font-medium text-slate-800 relative h-full"
          >
            {NAV_LINKS.map((link, i) => {
              const isActive =
                (link.href === "/" && pathname === "/") ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  href={link.href}
                  className={`relative pb-2 pt-2 uppercase tracking-wide transition-colors duration-200 ${
                    isActive ? "text-poster-yellow" : "hover:text-forest"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <span
              className="absolute bg-poster-yellow h-0.5 rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                left: underline.left,
                width: underline.width,
                top: underline.top,
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex-shrink-0 w-12 h-12 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg text-slate-100 hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-primary text-forest font-bold px-5 py-2.5 min-h-[48px] flex items-center justify-center rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              BOOK A STAY
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-[#3a4538] via-[#4a5542] to-[#2d3528] md:hidden"
            onClick={closeMobileMenu}
            aria-modal="true"
            role="dialog"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full pt-24 px-4 pb-8">
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="absolute top-4 right-4 w-12 h-12 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg text-slate-100 hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
              <nav
                className="flex flex-col gap-2 flex-1"
                onClick={(e) => e.stopPropagation()}
              >
                {NAV_LINKS.map((link) => {
                  const isActive =
                    (link.href === "/" && pathname === "/") ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`min-h-[48px] flex items-center px-4 rounded-lg text-lg font-medium uppercase tracking-wide transition-colors ${
                        isActive
                          ? "text-poster-yellow bg-white/10"
                          : "text-slate-100 hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="mt-4">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="min-h-[48px] flex items-center justify-center w-full bg-primary text-forest font-bold px-5 py-3 rounded-full text-base uppercase tracking-wide hover:opacity-90 transition-opacity"
                  >
                    BOOK A STAY
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
