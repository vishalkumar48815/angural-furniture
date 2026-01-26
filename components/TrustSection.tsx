"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Custom Projects" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Local", label: "Trusted Brand" },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-12">
          Trusted for Quality & Craftsmanship
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 border rounded-xl"
            >
              <p className="text-4xl font-bold text-[#6B4F2C]">
                {item.value}
              </p>
              <p className="mt-2 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
