import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ item, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotate: -4 }}
      className={`w-full rounded-[2.5rem] lg:rounded-[3rem] border-[6px] lg:border-[8px] ${item.borderColor} relative overflow-hidden group cursor-pointer h-[380px] sm:h-[440px] md:h-[400px] lg:h-[500px] xl:h-[560px] shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 bg-white`}
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src={item.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Floating Inset Colored Block Container */}
      <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5 lg:inset-x-6 lg:bottom-6 z-10 transition-transform duration-500 ease-out group-hover:-translate-y-2">

        {/* Slanted Green/Blue/Orange Box */}
        <div
          className={`w-full ${item.bg} rounded-3xl relative pt-12 md:pt-14 lg:pt-16 pb-6 md:pb-8 px-6 md:px-8`}
          style={{
            /* Slant top edge, keep bottom corners intact */
            clipPath: "polygon(0 15%, 100% 0, 100% 200%, 0 200%)"
          }}
        >
          <h4 className="text-white font-bold text-[1.4rem] md:text-[1.6rem] lg:text-[2rem] leading-[1.1] mb-4 lg:mb-5 tracking-[-0.01em] pr-2">
            {item.title}
          </h4>
          <span className="bg-white/30 text-white font-bold text-[13px] lg:text-[14px] px-3 lg:px-4 py-1.5 rounded-md w-max shadow-sm inline-block tracking-normal">
            {item.client}
          </span>
        </div>

        {/* Floating Diagonal Arrow Button Exactly on Top-Right Corner */}
        <div className="absolute right-0 top-0 translate-x-[25%] -translate-y-[25%] md:translate-x-[30%] md:-translate-y-[30%] z-20">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.15)] text-[#1A1A1A] group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 border border-black/5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:w-6 lg:h-6">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export default PortfolioCard;
