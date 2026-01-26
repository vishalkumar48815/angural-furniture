"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredGallery } from "@/data/featuredGallery";

export default function FeaturedGallery() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-serif font-bold">
            Featured Work
          </h2>
          <Link
            href="/gallery"
            className="text-[#6B4F2C] font-medium underline"
          >
            View Full Gallery →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredGallery.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="group"
            >
              <Link href={item.link}>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.category}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                    <span className="text-white font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
