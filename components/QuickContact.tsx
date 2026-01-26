import { siteInfo } from "@/data/site";
import { socials } from "@/data/socials";

export default function QuickContact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-6 text-center">
        <a
          href={`tel:${siteInfo.phones[0]}`}
          className="p-6 border rounded-xl hover:shadow-lg"
        >
          📞 Call Now
          <p className="text-sm mt-1">{siteInfo.phones[0]}</p>
        </a>

        <a
          href={socials.whatsapp}
          target="_blank"
          className="p-6 border rounded-xl hover:shadow-lg"
        >
          💬 WhatsApp
          <p className="text-sm mt-1">Quick Response</p>
        </a>

        <a
          href="https://www.google.com/maps?q=317%20Nathu%20Nagar%20Pathankot"
          target="_blank"
          className="p-6 border rounded-xl hover:shadow-lg"
        >
          📍 Get Directions
          <p className="text-sm mt-1">View on Google Maps</p>
        </a>
      </div>
    </section>
  );
}
