import { siteInfo } from "@/data/site";

export default function BusinessDetails() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6">
          Business Information
        </h2>

        <ul className="space-y-3">
          <li><strong>Owner:</strong> {siteInfo.owner}</li>
          <li><strong>Address:</strong> {siteInfo.address}</li>
          <li><strong>Working Hours:</strong> Mon – Sat (9 AM – 7 PM)</li>
          <li>
            <strong>Services:</strong> Custom Furniture, Modular Kitchen,
            Wardrobes, PVC Ceiling, Tables & More
          </li>
        </ul>
      </div>
    </section>
  );
}
