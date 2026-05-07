import React, { useState } from 'react';

// 1. Sarv components ithe import kara
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Excellence from './components/Excellence'; // Navin banavlele page
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // Active section track karnyathi state
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll logic
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-white">
      {/* 2. Components na yogy kramat ithe vapra */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        
        {/* Hingmire Trading sarakha professional excellence section */}
        <Excellence /> 
        
        <About />
        <Products scrollToSection={scrollToSection} />
        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;