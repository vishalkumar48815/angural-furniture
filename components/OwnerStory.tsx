"use client";

import { motion } from "framer-motion";
import { siteInfo } from "@/data/site";

export default function OwnerStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold mb-4">
            Meet {siteInfo.owner}
          </h2>
          <p className="mb-4">
            With years of hands-on experience, {siteInfo.owner} has built
            Angural Furniture on the foundation of honesty, quality,
            and customer satisfaction.
          </p>
          <p>
            Every piece of furniture is designed with care, crafted with
            precision, and delivered with pride.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-80 bg-gray-200 rounded-xl"
        >
          {/* Optional owner / workshop image */}
        </motion.div>
      </div>
    </section>
  );
}
