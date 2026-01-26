"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-24 bg-[#FAF7F2] text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif font-bold mb-4"
      >
        Let’s Build Your Furniture Together
      </motion.h1>

      <p className="text-lg max-w-2xl mx-auto">
        Visit our showroom or get in touch to discuss custom furniture designs
        tailored to your space and style.
      </p>
    </section>
  );
}
