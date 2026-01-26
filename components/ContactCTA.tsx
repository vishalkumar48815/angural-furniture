export default function ContactCTA() {
    return (
      <section className="py-16 bg-[#6B4F2C] text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Visit Our Showroom
            </h2>
            <p>
              317, Nathu Nagar, Pathankot, Punjab 145001, India
            </p>
  
            <div className="mt-4 flex gap-4">
              <a href="tel:7814930192" className="underline">
                7814930192
              </a>
              <a href="tel:9915112166" className="underline">
                9915112166
              </a>
            </div>
          </div>
  
          <iframe
            src="https://www.google.com/maps?q=317%20Nathu%20Nagar%20Pathankot&output=embed"
            className="w-full h-64 rounded-xl border"
            loading="lazy"
          />
        </div>
      </section>
    );
  }
  