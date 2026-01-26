"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">
          Our Work
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative h-64 rounded-xl overflow-hidden"
            >
              <Image src={src} alt="Furniture work" fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
