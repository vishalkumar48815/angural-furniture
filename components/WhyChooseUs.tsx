export default function WhyChooseUs() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">
            Why Choose Angural Furniture
          </h2>
  
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Custom Designs",
              "Premium Materials",
              "Skilled Craftsmanship",
              "Trusted Locally",
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  