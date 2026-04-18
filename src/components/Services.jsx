import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Social Strategy",
    subtitle: "Slimme strategie. Sterke start.",
    desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    bgColor: "bg-[#F5F5F5]",
    badgeLabel: "Expertise",
    videoUrl: "https://www.pexels.com/download/video/7659839/",
    buttonText: "Meer over social strategie",
    num: "01",
    rotateClass: "md:rotate-[-4deg]"
  },
  {
    id: 2,
    title: "Content Creation",
    subtitle: "Content die opvalt en raakt.",
    desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    bgColor: "bg-[#EF99EF]",
    badgeLabel: "Expertise",
    videoUrl: "https://www.pexels.com/download/video/7677015/",
    buttonText: "Meer over content creatie",
    num: "02",
    rotateClass: "md:rotate-[4deg]"
  },
  {
    id: 3,
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    bgColor: "bg-[#3DCC93]",
    badgeLabel: "Expertise",
    videoUrl: "https://www.pexels.com/download/video/37072488/",
    buttonText: "Meer over activatie",
    num: "03",
    rotateClass: "md:rotate-[-3deg]"
  },
  {
    id: 4,
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    bgColor: "bg-[#4DABFF]",
    badgeLabel: "Expertise",
    videoUrl: "https://www.pexels.com/download/video/30284959/",
    buttonText: "Meer over data",
    num: "04",
    rotateClass: "md:rotate-[3deg]"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 120, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const imageWrapperVariants = {
  hidden: { opacity: 0, scale: 0.85, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

const Services = () => {
  return (
    <section className="py-20 md:py-26 px-6 md:px-12 relative z-20 overflow-visible">
      <div className="w-full mx-auto flex flex-col gap-24 md:gap-32 lg:gap-40">

        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={cardVariants}
            style={{
              top: `calc(12vh + ${idx * 40}px)`,
              zIndex: 10 + idx
            }}
            className={`w-full ${service.bgColor} rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 lg:p-16 relative overflow-hidden flex flex-col justify-center group shadow-xl sticky`}
          >

            {/* The Giant Number Background */}
            <motion.div variants={numberVariants} className="absolute top-0 right-0 text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold text-black/10 blur-[1px] select-none z-0 leading-[0.8] tracking-tighter">
              {service.num}
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8 w-full relative z-10 md:items-center">

              {/* Header (Badge + Title) */}
              <div className="order-1 md:col-span-7 lg:col-span-7 xl:col-span-8 md:row-start-1 self-end flex flex-col items-start">
                <motion.span variants={textItemVariants} className="bg-white px-3 py-2 text-[12px] md:text-[14px] font-bold font-sans text-[#1A1A1A] rounded-md mb-8 inline-block shadow-sm">
                  {service.badgeLabel}
                </motion.span>
                <motion.h3 variants={textItemVariants} className="text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.9] font-bold text-[#1A1A1A] tracking-[-0.09em] m-0">
                  {service.title}
                </motion.h3>
              </div>

              {/* Right Image (Moves below Title on Mobile via order-2) */}
              <motion.div variants={imageWrapperVariants} className="order-2 md:col-span-5 lg:col-span-5 xl:col-span-4 md:row-start-1 md:row-span-2 w-[85%] sm:w-[65%] md:w-full max-w-[380px] mt-12 md:mt-0 mx-auto md:ml-auto relative z-10 md:-mr-4 lg:-mr-6 flex justify-center md:justify-end self-center">
                <div className={`w-full aspect-[4/5] rounded-3xl overflow-hidden border-[6px] md:border-[8px] border-white shadow-2xl relative transform ${service.rotateClass} group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out cursor-pointer`}>
                  <video
                    src={service.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>

              {/* Text Block (Subtitle, Description, Button) */}
              <div className="order-3 md:col-span-7 lg:col-span-7 xl:col-span-8 md:row-start-2 self-start mt-10 lg:mt-12">
                <div className="max-w-[440px]">
                  <motion.h4 variants={textItemVariants} className="text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-bold font-sans text-[#1A1A1A] mb-4 leading-tight">
                    {service.subtitle}
                  </motion.h4>
                  <motion.p variants={textItemVariants} className="text-[#1A1A1A]/90 font-bold leading-relaxed mb-8 text-[15px] md:text-[16px]">
                    {service.desc}
                  </motion.p>

                  {/* Button */}
                  <motion.button
                    variants={textItemVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-between border border-transparent bg-white rounded-xl pl-5 pr-1.5 py-1.5 w-max shadow-sm hover:shadow-md transition-all group/btn"
                  >
                    <span className="text-[#1A1A1A] font-semibold text-[14px] md:text-[15px] mr-5 group-hover/btn:translate-x-1 transition-transform">
                      {service.buttonText}
                    </span>
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white group-hover/btn:scale-110 group-hover/btn:-rotate-45 transition-transform duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;