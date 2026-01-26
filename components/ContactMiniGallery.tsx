import Image from "next/image";

const images = [
  "/images/beds/bed3.jpeg",
  "/images/sofas/sofa3.jpeg",
  "/images/wardrobes/wardrobe2.png",
  "/images/modular-kitchen/kitchen1.png",
];

export default function ContactMiniGallery() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">
          A Glimpse of Our Work
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative h-48 rounded-xl overflow-hidden"
            >
              <Image src={src} alt="Furniture work" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
