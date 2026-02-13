
import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Scene } from './components/Scene';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { SocialHub } from './components/SocialHub';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { InstallPWA } from './components/InstallPWA';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      
      {/* PWA Install Prompt */}
      <InstallPWA />

      {/* 3D Background Layer */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-50 z-0" />}>
        <Scene />
      </Suspense>

      {/* Main Content Scroll Layer */}
      <main className="relative z-10">
        
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm z-0"></div>

            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10 h-14">
                {/* Left Side - Hidden/Empty to balance layout if needed, effectively removed old logo */}
                <div className="w-20 hidden md:block"></div>

                {/* Centered 3D Animated Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                        className="perspective-1000 inline-block"
                    >
                         <motion.h1 
                            className="text-2xl md:text-4xl font-black tracking-widest uppercase cursor-pointer select-none"
                            animate={{ 
                                rotateY: [-5, 5, -5],
                                rotateX: [2, -2, 2],
                                filter: [
                                    "drop-shadow(0px 0px 5px rgba(168, 85, 247, 0.6))", 
                                    "drop-shadow(0px 0px 20px rgba(220, 38, 38, 0.8))", 
                                    "drop-shadow(0px 0px 5px rgba(168, 85, 247, 0.6))"
                                ]
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                         >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-fuchsia-600 to-red-600">
                                Tech Master web
                            </span>
                         </motion.h1>
                         {/* Reflection/Glow underneath */}
                         <motion.div 
                            className="h-1 w-full mx-auto mt-1 rounded-full bg-gradient-to-r from-purple-600/50 via-fuchsia-600/50 to-red-600/50 blur-lg"
                            animate={{ opacity: [0.4, 0.8, 0.4], scaleX: [0.9, 1.1, 0.9] }}
                            transition={{ duration: 3, repeat: Infinity }}
                         />
                    </motion.div>
                </div>

                {/* Right Side Navigation Links - Improved Styling */}
                <div className="hidden md:flex gap-1 ml-auto bg-white/50 p-1.5 rounded-full border border-white/50 shadow-inner backdrop-blur-md">
                    {[
                        { name: 'Home', href: '#' },
                        { name: 'Works', href: '#projects' },
                        { name: 'Expertise', href: '#skills' },
                        { name: 'Contact', href: '#contact' }
                    ].map((link, i) => (
                        <a 
                            key={i} 
                            href={link.href} 
                            className="px-5 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-red-600 transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>

        <Hero />
        <TechStack />
        <Skills />
        <Projects />
        <Team />
        <SocialHub />
        <Footer />
      </main>

    </div>
  );
};

export default App;
