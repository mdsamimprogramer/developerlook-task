import React, { useState } from 'react';

const originalBrands = [
  { name: "De Talenten tuin", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", isPlaceholder: true },
  { name: "Zwarte Cross", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", isPlaceholder: true },
  { name: "Bullit", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", isPlaceholder: true },
  { name: "Graafschap College", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", isPlaceholder: true },
  { name: "fides", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", isPlaceholder: true },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", isPlaceholder: true },
  { name: "YouTube", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg", isPlaceholder: true },
  { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg", isPlaceholder: true },
  { name: "Tesla", url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg", isPlaceholder: true },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", isPlaceholder: true },
];

const brands = [...originalBrands, ...originalBrands, ...originalBrands, ...originalBrands];

const Brands = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (idx) => {
    setClickedIndex(idx);
    setTimeout(() => setClickedIndex(null), 600);
  };

  return (
    <section className="relative py-20 bg-brand-bg overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl px-6 lg:px-12 mb-12">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-tight tracking-tight">
          These brands <br className="hidden md:block" />
          got hyped.
        </h3>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden flex">
        <div className="flex w-max animate-marquee-rtl gap-4 md:gap-6 px-4 md:px-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(idx)}
              className={`flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-transparent border border-black/30 rounded-2xl flex items-center justify-center p-16 cursor-pointer transition-all duration-300 ${clickedIndex === idx
                ? 'animate-wiggle scale-110 rotate-6 border-brand-orange shadow-xl bg-white/50'
                : ''
                }`}
            >
              <img
                src={brand.url}
                alt={brand.name}
                className={`max-w-[80%] max-h-[80%] object-contain transition-transform duration-300 ${clickedIndex === idx ? 'scale-125 -rotate-12' : ''
                  } ${brand.isPlaceholder && brand.name === 'fides' ? 'opacity-80' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/*  Bottom Underline */}
      <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black/10"></div>

      <style jsx>{`
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(5deg) scale(1.1);
          }
          50% {
            transform: rotate(-5deg) scale(1.15);
          }
          75% {
            transform: rotate(3deg) scale(1.1);
          }
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }

        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Brands;