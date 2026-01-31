"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const furnitureItems = [
  { label: "Beds", slug: "beds" },
  { label: "Sofas", slug: "sofas" },
  { label: "Wardrobes", slug: "wardrobes" },
  { label: "Modular Kitchen", slug: "modular-kitchen" },
  { label: "Tables", slug: "tables" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto p-3 p-md-4 flex justify-between items-center gap-4">
        {/* Logo – always left, does not shrink */}
        <div className="shrink-0 flex items-center justify-start">
          <Link href={"/"} className="inline-flex">
            <Image
              src="/logo/logo.png"
              alt="Angural Furniture"
              width={160}
              height={50}
              className="hidden sm:block"
            />
            <Image
              src="/logo/logo.png"
              alt="Angural Furniture"
              width={140}
              height={50}
              className="sm:hidden bg-transparent"
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* DESKTOP HOVER DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer select-none">
              Furniture
            </span>

            {/* Hover bridge */}
            <div className="absolute top-full left-0 h-3 w-full" />

            <div
              className="
                absolute top-full left-0 mt-3
                w-56 rounded-xl bg-white shadow-lg
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              "
            >
              {furnitureItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/gallery/${item.slug}`}
                  className="block px-5 py-3 hover:bg-gray-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden shrink-0 text-2xl p-2 -m-2 touch-manipulation"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <LuMenu />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6">
            {/* Close */}
            <button
              className="text-xl mb-6"
              onClick={() => setMobileOpen(false)}
            >
              <RxCross2 />
            </button>

            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>
                About
              </Link>

              {/* MOBILE FURNITURE ACCORDION */}
              <button
                className="text-left font-medium"
                onClick={() => setFurnitureOpen(!furnitureOpen)}
              >
                Furniture ▾
              </button>

              {furnitureOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  {furnitureItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/gallery/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/gallery" onClick={() => setMobileOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
