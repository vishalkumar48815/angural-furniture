"use client";

import Image from "next/image";

export default function Lightbox({ src, onClose }: any) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div className="relative w-[90%] h-[80%]">
        <Image src={src} alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
