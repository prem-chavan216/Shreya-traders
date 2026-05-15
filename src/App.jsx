import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Login from './components/Login';
// टीप: जर तुमच्याकडे स्वतंत्र About.jsx कॉम्पोनंट असेल तर ते इथे इम्पोर्ट करा, नसेल तर ही ओळ काढून टाका
import About from './components/About'; 

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // युजर लॉगिन आहे की नाही हे तपासण्यासाठी
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // १. नेव्हबार स्क्रोलिंगसाठी हे महत्त्वाचे फंक्शन जोडले आहे
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  if (loading) return null; // लोड होईपर्यंत काहीही दाखवू नका

  return (
    <Router>
      <Routes>
        {/* Main Website Route */}
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            {/* २. नेव्हबारला activeSection आणि scrollToSection प्रॉप्स दिले आहेत */}
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
            
            {/* ३. प्रत्येक विभागाला अचूक ID दिला आहे जेणेकरून स्क्रोलिंग मॅच होईल */}
            <div id="home">
              <Hero scrollToSection={scrollToSection} />
            </div>
            
            {/* Products कॉम्पोनंटच्या आत आधीच id="products" लावलेला आहे */}
            <Products scrollToSection={scrollToSection} />
            
            {/* जर स्वतंत्र About कॉम्पोनंट नसेल आणि तो कोड Hero किंवा इतर कुठे असेल, तर तुम्ही त्या कॉम्पोनंटला id="about" देऊ शकता */}
            <div id="about">
              <About />
            </div>
            
            <div id="contact">
              <Contact />
            </div>
            
            <Footer />
          </div>
        } />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Route */}
        <Route 
          path="/admin" 
          element={user ? <Admin /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;