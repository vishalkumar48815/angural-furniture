export default function AboutTrust() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">
            Why Customers Trust Angural Furniture
          </h2>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Custom-Made Furniture",
              "Premium Materials",
              "Transparent Pricing",
              "Local Trusted Brand",
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  