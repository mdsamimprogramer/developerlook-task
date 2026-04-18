import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fdf8f1] font-sans selection:bg-brand-pink selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

export default App;
