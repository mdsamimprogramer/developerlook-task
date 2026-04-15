import React from 'react';

const brands = [
  { name: "Royal", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Solontopper", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "seeming flex", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Graafschap College", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "fides", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" }
];

const Brands = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-brand-bg border-t-2 border-brand-dark/10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark mb-10 max-w-sm">
          These brands got hyped.
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          {brands.map((brand, idx) => (
            <div key={idx} className="bg-white/50 border-2 border-brand-dark/10 rounded-xl p-6 flex items-center justify-center hover:bg-white hover:border-brand-dark hover:shadow-brutal transition-all cursor-pointer h-32 grayscale hover:grayscale-0">
              <img src={brand.url} alt={brand.name} className="max-w-[70%] max-h-12 object-contain opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
