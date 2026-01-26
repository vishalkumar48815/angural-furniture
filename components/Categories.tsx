"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">
          Furniture We Create
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/gallery/${cat.slug}`}
              className="group"
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="relative h-72 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl text-white font-semibold">
                    {cat.title}
                  </h3>
                  <span className="text-sm text-white mt-1 opacity-90">
                    View Designs →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
