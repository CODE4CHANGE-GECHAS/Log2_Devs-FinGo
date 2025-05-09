import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TargetUsers from './components/TargetUsers';
import Features from './components/Features';
import WhyFinGo from './components/WhyFinGo';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function Home() {
  return (
    <>
      <Hero />
      <TargetUsers />
      <WhyFinGo />
      <Features />
      {/* <TechStack /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#8F00FF] to-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatBot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 

