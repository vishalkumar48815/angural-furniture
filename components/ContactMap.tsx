export default function ContactMap() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <iframe
            src="https://www.google.com/maps?q=317%20Nathu%20Nagar%20Pathankot&output=embed"
            className="w-full h-80 rounded-xl border"
            loading="lazy"
          />
        </div>
      </section>
    );
  }
  