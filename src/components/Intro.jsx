import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="py-14 md:py-18 lg:py-24 overflow-hidden relative z-30">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mb-12"
        >
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.1] md:leading-[1.05] font-bold text-[#1A1A1A] tracking-[-0.03em] max-w-full md:max-w-[90%] lg:max-w-[980px] md:ml-8 lg:ml-32">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h2>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 justify-between items-start md:items-end relative">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full sm:w-[280px] h-[320px] sm:h-[340px] md:h-[350px] lg:w-[320px] lg:h-[400px] rounded-2xl md:rounded-[1.5rem] overflow-hidden shrink-0 bg-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Creator"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Center: Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex-1 md:ml-6 lg:ml-10 xl:ml-20 pb-0 md:pb-4 self-start md:self-end w-full"
          >
            <div className="max-w-full md:max-w-[420px]">
              <p className="text-[#1A1A1A] text-[1rem] sm:text-[1.1rem] md:text-[1.15rem] lg:text-[1.25rem] leading-[1.5] md:leading-[1.4] font-bold font-sans tracking-[-0.01em] mb-6 md:mb-8">
                We stoppen niet bij mooie plaatjes en
                vette beelden. We maken het meetbaar.
                Zo weet je precies wat werkt en wat niet.
                Nooit meer content zonder strategie.
                Nooit meer content zonder resultaat.
              </p>

              <button className="flex items-center justify-between border border-[#1A1A1A]/20 rounded-xl pl-4 sm:pl-5 pr-1.5 py-1.5 w-max hover:bg-[#1A1A1A]/5 transition-all duration-300 group hover:border-[#1A1A1A]/40">
                <span className="text-[#1A1A1A] font-semibold text-[13px] sm:text-[14px] md:text-[15px] mr-4 sm:mr-6">Leer ons kennen</span>
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right: Small down arrow -> fixed to the right bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="hidden md:flex flex-col items-center absolute right-0 bottom-4 lg:bottom-8"
          >
            <button className="w-10 h-10 md:w-[42px] md:h-[42px] border border-[#1A1A1A]/20 rounded-[10px] md:rounded-[12px] flex items-center justify-center hover:bg-[#1A1A1A]/5 transition-all duration-300 group hover:border-[#E42E25]/40 hover:translate-y-1">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E42E25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-180 group-hover:translate-y-0.5 transition-transform duration-500"
              >
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Intro;