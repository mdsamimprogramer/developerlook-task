import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    id: 1,
    client: "Voor en imago test",
    title: "Nieuwe fit rondom",
    tag: "Work",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bg: "bg-brand-orange"
  },
  {
    id: 2,
    client: "Zacht in smaak,",
    title: "sterk in bereik",
    tag: "Work",
    img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bg: "bg-brand-blue"
  },
  {
    id: 3,
    client: "Content die écht",
    title: "smaakt (en raakt)",
    tag: "Work",
    img: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bg: "bg-brand-green"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-brand-bg relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 pt-12">
        {/* Left Side: Title */}
        <div className="w-full md:w-1/3 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-heading font-extrabold text-brand-dark mb-6 leading-tight"
          >
            Content<br/>dat scoort.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-dark/80 font-bold mb-8 max-w-sm text-lg leading-snug"
          >
            Wij vertellen jouw verhaal. Op een manier die echt past bij jouw merk en het verschil maakt.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="self-start bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-brand-dark border-2 border-brand-dark transition-all shadow-[4px_4px_0px_#111] hover:shadow-[2px_2px_0px_#111] hover:translate-y-[2px]"
          >
            Lees ons verhaal
            <span className="bg-white/20 rounded-full p-1 border border-white/30 text-white">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </motion.button>
        </div>

        {/* Right Side: Cards */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-0 pt-8">
          {cases.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className={`rounded-3xl border-4 border-brand-dark shadow-brutal overflow-hidden flex flex-col h-[400px] cursor-pointer`}
            >
              <div className="h-2/3 w-full border-b-4 border-brand-dark relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-4 right-4 bg-white border-2 border-brand-dark w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl shadow-[2px_2px_0px_#111]">
                  &rarr;
                </span>
              </div>
              <div className={`${item.bg} h-1/3 p-5 flex flex-col justify-end`}>
                <span className="bg-white/20 w-max px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase mb-2 border border-white/40">{item.tag}</span>
                <p className="text-white font-bold leading-tight font-heading text-xl">{item.client}</p>
                <p className="text-white font-medium text-sm mt-1">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
