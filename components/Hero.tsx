"use client";

import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";
import HeroFeatured from "./HeroFeatured";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif font-bold leading-tight">
            Crafting Comfort.
            <br />
            Designing Elegance.
          </h1>

          <p className="mt-4 text-lg max-w-md">
            Custom furniture designed with premium materials and skilled
            craftsmanship.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="tel:7814930192"
              className="bg-[#6B4F2C] text-white px-6 py-3 rounded"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border border-[#6B4F2C] px-6 py-3 rounded"
            >
              Visit Showroom
            </a>
          </div>
        </motion.div>

        {/* RIGHT SLIDER */}
        <div className="relative">
          <HeroSlider />
          {/* <HeroFeatured /> */}
        </div>

      </div>
    </section>
  );
}
