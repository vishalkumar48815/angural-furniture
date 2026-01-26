import { socials } from "@/data/socials";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function FloatingWhatsApp() {
  return (
    <a
      href={socials.whatsapp}
      target="_blank"
      className="fixed bottom-6 right-6 bg-transparent text-white p-1 rounded-lg shadow-lg z-50"
    >
      <IoLogoWhatsapp className="text-green-500" size={50} />
    </a>
  );
}
