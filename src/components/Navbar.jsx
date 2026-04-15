import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Expertises", href: "#expertises" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Mobile Menu Variants
  const menuVariants = {
    initial: { y: "-100%" },
    animate: {
      y: 0,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.4 }
    })
  };

  return (
    <nav className="fixed tracking-tight w-full top-0 left-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center bg-[#fdf8f1]/90 backdrop-blur-sm">

      {/* Logo */}
      <div className="flex-shrink-0 z-[70]">
        <img
          src="https://i.ibb.co.com/N2bQwFLW/a.jpg"
          alt="logo"
          className="h-8 md:h-10 w-auto"
        />
      </div>

      {/* Center Menu (Desktop) */}
      <div className="hidden md:flex items-center">
        <div className="flex gap-1 px-2 py-1 rounded-xl bg-white border border-black/5 shadow-sm">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative px-3 py-2.5 text-[14px] font-extrabold text-[#1a1a1a] overflow-hidden group rounded-xl"
              initial="initial"
              whileHover="hover"
            >
              <span className="relative z-10 transition-colors duration-300">
                {link.name}
              </span>
              <motion.div
                variants={{
                  initial: { y: "100%" },
                  hover: { y: 0 }
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-black z-20 flex items-center justify-center"
              >
                <span className="text-red-500 font-extrabold uppercase tracking-widest text-[13px]">
                  {link.name}
                </span>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Right Button (Desktop) */}
      <div className="hidden md:block">
        <motion.a
          href="#contact"
          whileHover={{ x: 6, y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-[#f395d8] px-2 py-3.5 rounded-xl text-[15px] font-black text-black inline-block shadow-sm"
        >
          Get Results <span className="bg-white px-2 py-2 rounded-xl ml-1">
            🔥
          </span>
        </motion.a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden z-[70] bg-white w-12 h-12 flex items-center justify-center rounded-2xl border border-black/5 shadow-sm"
      >
        <span className="text-xl">{open ? "✕" : "☰"}</span>
      </button>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-[#f395d8] flex flex-col rounded-xl items-center justify-center gap-4 md:hidden z-[60]"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={i}
                variants={itemVariants}
                onClick={() => setOpen(false)}
                className="bg-white px-8 py-4 rounded-2xl text-xl font-extrabold text-black text-center shadow-sm"
              >
                {link.name}
              </motion.a>
            ))}

            {/* Mobile Bottom CTA Button */}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-12 bg-[#1a1a1a] text-white px-2.5 py-2.5 rounded-2xl text-xl font-bold flex items-center gap-2"
            >
              Get Results
              <span className="bg-white px-2 py-2 rounded-xl ml-1">
                🔥
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;