import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-black py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* LEFT: LOGO + BRAND */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo/logo.png"
              alt="Angural Furniture"
              width={180}
              height={48}
              className="opacity-90"
            />
          </Link>
          <p className="text-sm text-black-300 max-w-xs">
            Crafting premium custom furniture with quality materials and skilled craftsmanship.
          </p>
        </div>

        {/* CENTER: QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-black-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT: SOCIAL */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <p className="text-sm text-black-300">
            Pathankot, Punjab
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-black-400 mt-10">
        © {new Date().getFullYear()} Angural Furniture. All rights reserved.
      </div>
    </footer>
  );
}
