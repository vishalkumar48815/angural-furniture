"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/data/heroSlider";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-lg">
      {heroSlides.map((slide, i) => (
        <Link
          key={i}
          href={slide.link}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </Link>
      ))}
    </div>
  );
}
