import Link from "next/link";
import Image from "next/image";
import { galleries } from "@/data/gallery/index";

export default function GalleryPage() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-serif font-bold mb-10 text-center">
        Our Furniture Gallery
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleries.map((item) => (
          <Link
            key={item.slug}
            href={`/gallery/${item.slug}`}
            className="group"
          >
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={item.images[0]}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
            </div>

            <h3 className="mt-4 text-xl font-medium text-center">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
