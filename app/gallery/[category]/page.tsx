'use client';

import Lightbox from "@/components/Lightbox";
import { galleries } from "@/data/gallery/index";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

export default function CategoryGallery() {
    const [active, setActive] = useState<string | null>(null);
    const { category } = useParams();

    const gallery = galleries.find(
        (g) => g.slug === category
    );

    if (!gallery) return notFound();

    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-8">
                {gallery.title}
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {gallery.images.map((src, i) => (
                    <div
                        key={i}
                        className="relative h-64 rounded-xl overflow-hidden" onClick={() => setActive(src)}
                    >
                        <Image
                            src={src}
                            alt={gallery.title}
                            fill
                            className="object-cover hover:scale-105 transition"
                        />
                    </div>
                ))}
            </div>
            {active && <Lightbox src={active} onClose={() => setActive(null)} />}

        </section>
    );
}
