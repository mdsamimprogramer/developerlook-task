import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Social strategy",
    subtitle: "Slimme strategie, slimme content.",
    desc: "Wij dekken de structuur voor al je succes die overal alle de doelen van jouw content perfect aanvullen tot het hoogste resultaat.",
    bgColor: "bg-white",
    badgeLabel: "Expertise",
    imgUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imgBorder: "border-brand-orange"
  },
  {
    id: 2,
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    desc: "Wij maken content waar mensen over praten. Geen snelle plaatjes, maar echte verhalen die werken voor alle online kanalen.",
    bgColor: "bg-brand-pink",
    badgeLabel: "Expertise",
    imgUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imgBorder: "border-white"
  },
  {
    id: 3,
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    desc: "De juiste content via de juiste kanalen. Wij zorgen dat je doelgroep jouw merk niet meer kan missen.",
    bgColor: "bg-brand-green",
    badgeLabel: "Expertise",
    imgUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imgBorder: "border-white"
  },
  {
    id: 4,
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    desc: "Wij duiken in de cijfers om te begrijpen wat echt werkt, zodat we jouw content strategie kunnen optimaliseren.",
    bgColor: "bg-brand-blue",
    badgeLabel: "Expertise",
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imgBorder: "border-white"
  }
];

const Services = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-brand-bg relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`${service.bgColor} rounded-[2rem] border-4 border-brand-dark shadow-brutal p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group`}
          >
            <div className="w-full md:w-1/2">
              <span className="bg-white border-2 border-brand-dark px-3 py-1 text-xs font-bold font-sans uppercase rounded-full shadow-[2px_2px_0px_#111] inline-block mb-6">
                {service.badgeLabel}
              </span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-brand-dark mb-4 tracking-tight">
                {service.title}
              </h3>
              <h4 className="text-xl font-bold font-sans text-brand-dark mb-3">
                {service.subtitle}
              </h4>
              <p className="text-brand-dark/80 font-medium max-w-sm">
                {service.desc}
              </p>
            </div>
            
            <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-auto md:h-64 rounded-2xl overflow-hidden border-4 border-brand-dark shadow-brutal transform group-hover:scale-[1.02] transition-transform duration-300">
              <img src={service.imgUrl} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
