"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-12">
          <li>
            <Link 
              href="/" 
              className={`transition-colors duration-300 font-medium tracking-wide ${
                pathname === "/" ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link 
              href="/portfolio" 
              className={`transition-colors duration-300 font-medium tracking-wide ${
                pathname === "/portfolio" ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={`transition-colors duration-300 font-medium tracking-wide ${
                pathname === "/blog" ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              BLOG
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};