"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/siteContent";

export function SiteHeader() {
  const pathname = usePathname();

  const scrollToTopOnCurrentPage = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== href) {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Primary navigation">
        <Link className="brand" href="/" onClick={scrollToTopOnCurrentPage("/")} scroll>
          <span className="brand-mark">V</span>
          <span>Velo</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              className="nav-link"
              href={item.href}
              key={item.href}
              onClick={scrollToTopOnCurrentPage(item.href)}
              scroll
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="nav-link"
            href="/archive"
            aria-label="Open technical archive"
            onClick={scrollToTopOnCurrentPage("/archive")}
            scroll
          >
            Archive <ArrowUpRight size={14} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
