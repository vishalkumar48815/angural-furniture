"use client";

const steps = [
  {
    title: "Understanding Requirements",
    desc: "We listen carefully to your needs, space, and budget.",
  },
  {
    title: "Design & Material Selection",
    desc: "Choose designs, finishes, and premium materials.",
  },
  {
    title: "Crafting & Manufacturing",
    desc: "Furniture is handcrafted with precision and care.",
  },
  {
    title: "Delivery & Installation",
    desc: "On-time delivery with professional installation.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center">
          How We Work
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <span className="text-[#6B4F2C] font-bold text-xl">
                {i + 1}.
              </span>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
