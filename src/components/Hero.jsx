import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-20 md:pb-16 pb-10 px-6 md:px-10 overflow-hidden min-h-screen">

      {/* 1. Header Text Container */}
      <div className="w-full flex flex-col z-10 relative mt-10 tracking-tighter font-sans">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-bold leading-[0.9]"
        >
          Get Hyped. Get<br />
          Noticed. Get Results.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-10"
        >
          <p className="font-bold max-w-[300px] text-lg md:text-xl leading-tight">
            Klaar met gokken op content die niets oplevert?
          </p>
        </motion.div>
      </div>

      {/* 2. Floating Cards Container */}
      <div className="relative mt-20 flex flex-row justify-center items-center z-20">

        {/* Card 1: Blue (10M+) */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -15, y: 50 }}
          animate={{ opacity: 1, x: 0, rotate: -6, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -15, rotate: -4, transition: { duration: 0.3 } }}
          className="w-[260px] md:w-[300px] aspect-[4/5] bg-[#0084FF] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-lg relative md:rotate-[-6deg] z-10 md:-mr-12"
        >
          <span className="text-5xl md:text-6xl font-bold text-black tracking-tight">10M+</span>
          <div>
            <div className="h-[2px] w-full bg-black/80 mb-4"></div>
            <h3 className="text-black font-bold text-xl leading-tight tracking-tight">Organische views</h3>
            <p className="text-black/80 text-sm font-medium mt-1">Groei door slimme content</p>
          </div>
        </motion.div>

        {/* Card 2: Image (Drinks) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -15, rotate: 0, transition: { duration: 0.3 } }}
          className="w-[260px] md:w-[320px] aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden shadow-lg relative md:rotate-[-1deg] z-20 md:-mr-12"
        >
          <video
            src="https://www.pexels.com/download/video/8738293/"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 3: Green (30+) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -15, rotate: 4, transition: { duration: 0.3 } }}
          className="w-[260px] md:w-[300px] aspect-[4/5] bg-[#22D38A] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-lg relative md:rotate-[3deg] z-30 md:-mr-12"
        >
          <span className="text-5xl md:text-6xl font-bold text-black tracking-tight">30+</span>
          <div>
            <div className="h-[2px] w-full bg-black/80 mb-4"></div>
            <h3 className="text-black font-bold text-xl leading-tight tracking-tight">Merken geholpen</h3>
            <p className="text-black/80 text-sm font-medium mt-1">Van start-up tot multinational</p>
          </div>
        </motion.div>

        {/* Card 4: Image (Car) */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 15, y: 50 }}
          animate={{ opacity: 1, x: 0, rotate: 6, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -15, rotate: 8, transition: { duration: 0.3 } }}
          className="w-[260px] md:w-[320px] aspect-[4/5] bg-white rounded-[2.5rem] overflow-hidden shadow-lg relative md:rotate-[6deg] z-40 hidden sm:block"
        >
          <video
            src="https://www.pexels.com/download/video/18447539/"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute bottom-10 right-0 flex items-center justify-center transform rotate-[-4deg]">
            <span className="bg-[#E42E25] text-white font-black px-3 py-1 text-2xl tracking-tighter shadow-md" style={{ fontFamily: 'Impact, sans-serif' }}>
              CARBON DAK.
            </span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;