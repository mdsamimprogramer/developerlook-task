import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

const cases = [
  {
    id: 1,
    client: "Bullit",
    title: "Van nul naar vol, binnen 3 weken",
    bg: "bg-[#FF511A]",
    borderColor: "border-[#FF511A]",
    videoUrl: "https://www.pexels.com/download/video/6872476/",
  },
  {
    id: 2,
    client: "Roasta",
    title: "Zacht in smaak, sterk in beeld",
    bg: "bg-[#0084FF]",
    borderColor: "border-[#0084FF]",
    videoUrl: "https://www.pexels.com/download/video/33880845/",
  },
  {
    id: 3,
    client: "Loco",
    title: "Content die écht smaakt (en raakt)",
    bg: "bg-[#3DCC93]",
    borderColor: "border-[#3DCC93]",
    videoUrl: "https://www.pexels.com/download/video/33512869/",
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 xl:px-16 relative z-20 overflow-visible">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-6 lg:gap-8 xl:gap-10 items-start">

        {/* Column 1: Title Block & Card 1 */}
        <div className="w-full md:w-[33.33%] flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 lg:mb-20 xl:mb-24"
          >
            <h2 className="text-[3.8rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6.2rem] leading-[0.95] font-bold text-[#1A1A1A] tracking-[-0.09em] mb-6">
              Content<br />datscoort.
            </h2>
            <p className="text-[#1A1A1A]/90 font-extrabold text-[14px] md:text-[16px] lg:text-[16px] xl:text-[20px] leading-relaxed max-w-[340px] mb-8 lg:mb-10">
              Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
            </p>
            <button className="flex items-center justify-between border-[1.5px] border-[#1A1A1A] bg-transparent rounded-xl pl-5 pr-1.5 py-1.5 w-max transition-all duration-300 shadow-sm hover:translate-x-2 hover:-translate-y-1 hover:rotate-[4deg]">

              <span className="font-bold text-[13px] md:text-[14px] lg:text-[15px] mr-5">
                Bekijk al ons werk
              </span>

              <div className="w-8 h-8 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>

            </button>
          </motion.div>

          <PortfolioCard item={cases[0]} delay={0.15} />
        </div>

        {/* Column 2: Blue Card (Aligned with Button) */}
        <div className="w-full md:w-[33.33%] flex flex-col md:mt-[230px] lg:mt-[340px] xl:mt-[430px]">
          <PortfolioCard item={cases[1]} delay={0.3} />
        </div>

        {/* Column 3: Green Card (Aligned with Subtitle) */}
        <div className="w-full md:w-[33.33%] flex flex-col md:mt-[100px] lg:mt-[180px] xl:mt-[220px]">
          <PortfolioCard item={cases[2]} delay={0.45} />
        </div>

      </div>
    </section>
  );
};

export default Portfolio;