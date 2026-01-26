import Image from "next/image";
import Link from "next/link";
import { heroFeatured } from "@/data/heroFeatured";

export default function HeroFeatured() {
  return (
    <div className="hidden lg:flex flex-col gap-4 absolute -right-20 top-1/2 -translate-y-1/2">
      {heroFeatured.map((item, i) => (
        <Link
          key={i}
          href={item.link}
          className="bg-white rounded-xl shadow p-3 w-40 hover:scale-105 transition"
        >
          <div className="relative h-20 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm mt-2 text-center font-medium">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
}
