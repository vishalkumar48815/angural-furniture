"use client";

import { motion } from "framer-motion";
import { siteInfo } from "@/data/site";

export default function AboutHero() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-serif font-bold mb-6"
        >
          Crafting Furniture with Pride & Precision
        </motion.h1>

        <p className="max-w-3xl mx-auto text-lg">
          At {siteInfo.brand}, we believe furniture is not just wood and nails —
          it’s comfort, durability, and a reflection of your lifestyle.
        </p>
      </div>
    </section>
  );
}
