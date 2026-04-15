import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-24 pb-8 px-6 lg:px-12 relative overflow-hidden flex flex-col items-center">
      
      {/* Huge CTA Text */}
      <h2 className="text-6xl md:text-8xl lg:text-[10rem] leading-[0.8] font-heading font-extrabold text-brand-dark tracking-tighter text-center z-10 w-full mb-16">
        Let's Get Hyped!
      </h2>

      {/* Floating Pink Badge */}
      <div className="absolute top-10 right-10 md:top-20 md:right-32 w-32 h-32 md:w-48 md:h-48 bg-[#fcbdfc] rounded-full flex justify-center items-center font-heading font-bold text-center p-6 rotate-12 border-4 border-brand-dark shadow-brutal z-20 animate-[spin_10s_linear_infinite]">
        <span className="uppercase text-brand-dark text-xs md:text-lg tracking-widest block transform -rotate-12">Social Media Masters</span>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t-4 border-brand-dark pt-12 z-10">
        
        {/* Left Links */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a href="#" className="border-2 border-brand-dark px-4 py-1.5 rounded-full font-bold bg-white text-sm hover:bg-brand-dark hover:text-white transition-colors">Services</a>
            <a href="#" className="border-2 border-brand-dark px-4 py-1.5 rounded-full font-bold bg-white text-sm hover:bg-brand-dark hover:text-white transition-colors">Work</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="border-2 border-brand-dark px-4 py-1.5 rounded-full font-bold bg-white text-sm hover:bg-brand-dark hover:text-white transition-colors">About</a>
            <a href="#" className="border-2 border-brand-dark px-4 py-1.5 rounded-full font-bold bg-white text-sm hover:bg-brand-dark hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Center / Socials */}
        <div className="flex flex-col items-center gap-4">
           <p className="font-bold text-sm tracking-widest uppercase">Follow Us</p>
           <div className="flex gap-4">
             <a href="#" className="w-10 h-10 border-2 border-brand-dark rounded-full flex items-center justify-center bg-white hover:bg-brand-pink hover:shadow-brutal transition-all">In</a>
             <a href="#" className="w-10 h-10 border-2 border-brand-dark rounded-full flex items-center justify-center bg-white hover:bg-brand-blue hover:shadow-brutal transition-all">Fb</a>
             <a href="#" className="w-10 h-10 border-2 border-brand-dark rounded-full flex items-center justify-center bg-white hover:bg-brand-orange hover:shadow-brutal transition-all">Ig</a>
             <a href="#" className="w-10 h-10 border-2 border-brand-dark rounded-full flex items-center justify-center bg-white hover:bg-brand-green hover:shadow-brutal transition-all">Tk</a>
           </div>
        </div>

        {/* Right Info */}
        <div className="text-right flex flex-col gap-1 items-start md:items-end font-medium text-sm">
           <p className="font-bold">Contact</p>
           <p>info@gethyped.nl</p>
           <p>+31 (0) 6 12345678</p>
           <p className="mt-4">KVK: 12345678</p>
           <p className="text-xs text-brand-dark/50 mt-2">© 2026 Get Hyped. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
