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

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // युजर लॉगिन आहे की नाही हे तपासण्यासाठी
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null; // लोड होईपर्यंत काहीही दाखवू नका

  return (
    <Router>
      <Routes>
        {/* Main Website Route */}
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Products />
            <Contact />
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