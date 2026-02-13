
import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { GradientText, MagneticButton } from './UIElements';
import { ChevronRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, Float, Torus } from '@react-three/drei';
import { LaptopModel } from './ThreeLaptop';
import { SITE_DATA, HERO_LINKS } from '../constants';

const TypingEffect: React.FC<{ phrases: string[] }> = ({ phrases }) => {
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = phrases[currentPhrase];
            
            if (isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setCurrentPhrase((prev) => (prev + 1) % phrases.length);
            }
        }, isDeleting ? 30 : 80);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, phrases, currentPhrase]);

    return (
        <span className="font-mono text-blue-600 font-bold drop-shadow-md">
            {displayText}
            <span className="animate-pulse text-purple-600">|</span>
        </span>
    );
};

// Rotating Tech Rings around the laptop
const Gyroscope = () => {
    return (
        <group position={[0, 0, -1]}>
             <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
                <Torus args={[3.2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                     <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
                </Torus>
                <Torus args={[3.5, 0.02, 16, 100]} rotation={[0, Math.PI / 3, 0]}>
                     <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
                </Torus>
                <Torus args={[3.8, 0.02, 16, 100]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                     <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} />
                </Torus>
             </Float>
        </group>
    )
}

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center px-6 pt-20 md:pt-32 pb-20 overflow-visible bg-transparent perspective-2000">
      
      {/* Background Gradient Layer - Removed secondary Canvas to fix WebGL context loss */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/20 to-slate-50"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content - Text Section */}
        {/* Changed order-2 to order-1 to make it appear first on mobile */}
        <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-left order-1 flex flex-col gap-6"
            style={{ transformStyle: "preserve-3d" }}
        >
             <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="inline-flex items-center self-start gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-white shadow-[0_0_20px_rgba(37,99,235,0.2)] text-slate-800 text-sm font-bold mb-2"
             >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                {SITE_DATA.title}
             </motion.div>

            <div className="perspective-1000">
                <h1 className="text-5xl md:text-8xl font-black leading-none text-slate-900 tracking-tighter drop-shadow-xl transform transition-transform hover:scale-[1.02] duration-300 origin-left">
                    <GradientText text={SITE_DATA.name} />
                </h1>
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-2"
                />
            </div>
            
            <div className="text-2xl md:text-3xl text-slate-800 font-bold h-16 md:h-auto flex items-center gap-2">
                <span>I AM </span>
                <TypingEffect phrases={[
                    "A COMPUTER ENGINEER", 
                    "A FULL STACK DEV", 
                    "A MOBILE EXPERT", 
                    "GAJARBOTOL ADMIN"
                ]} />
            </div>

            {/* Added GIF as requested - Full Size & Transparent Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="w-full my-2 mix-blend-darken"
            >
                <img 
                    src="https://www.gajarbotol.site/Tech_master/giphy.gif" 
                    alt="Tech Animation" 
                    className="w-full h-auto object-contain"
                />
            </motion.div>

            <motion.div 
                whileHover={{ scale: 1.02, rotateX: 2 }}
                className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border-l-8 border-blue-600 shadow-2xl"
            >
                <p className="text-slate-700 text-lg font-medium leading-relaxed">
                    {SITE_DATA.bio}
                </p>
            </motion.div>

            {/* Social Link Grid - Reverted to Card Style with Title and 3D Flip */}
            <div className="grid grid-cols-4 gap-4 mt-6">
                {HERO_LINKS.map((link, idx) => (
                    <motion.a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        variants={{
                            initial: { opacity: 0, y: 50 },
                            animate: { opacity: 1, y: 0, transition: { delay: 0.5 + (idx * 0.1) } },
                            hover: { scale: 1.05, y: -5 }
                        }}
                        className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/80 border border-white shadow-lg backdrop-blur-sm cursor-pointer group"
                    >
                        {/* 3D Icon Container */}
                        <div className="w-10 h-10 md:w-12 md:h-12 mb-2 relative" style={{ perspective: '1000px' }}>
                            <motion.div
                                className="w-full h-full relative"
                                style={{ transformStyle: 'preserve-3d' }}
                                variants={{
                                    hover: { rotateY: 180 },
                                    initial: { rotateY: 0 },
                                    animate: { rotateY: 0 }
                                }}
                                transition={{ duration: 0.6, type: "spring" }}
                            >
                                {/* Front Face */}
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 rounded-xl shadow-inner border border-slate-100" style={{ backfaceVisibility: 'hidden' }}>
                                    <link.icon size={22} style={{ color: link.color }} />
                                </div>
                                {/* Back Face - Flipped 180deg */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                    <link.icon size={22} className="text-white" />
                                </div>
                            </motion.div>
                        </div>

                        <span className="text-[10px] md:text-xs font-bold uppercase text-slate-500 group-hover:text-blue-600 transition-colors text-center">{link.name}</span>
                    </motion.a>
                ))}
            </div>

            <div className="flex flex-wrap gap-6 mt-6 relative z-20">
                <MagneticButton href="#projects" variant="primary">
                    View Projects <ChevronRight size={20} />
                </MagneticButton>
                <MagneticButton href="#contact" variant="secondary">
                    Contact Me
                </MagneticButton>
            </div>

            {/* Extra Decorative GIF filling bottom space */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="w-full mt-12 overflow-hidden rounded-2xl shadow-sm mix-blend-multiply opacity-90"
            >
                 <img 
                    src="https://www.gajarbotol.site/Tech_master/accent%20collection/65c6885689e678a3e84df256.gif" 
                    alt="Cyberpunk Accent" 
                    className="w-full h-auto object-cover"
                />
            </motion.div>

        </motion.div>

        {/* Right Content - Main 3D Interactive Laptop */}
        {/* Changed order-1 to order-2 so it appears below text on mobile */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="relative h-[400px] md:h-[700px] order-2 w-full flex items-center justify-center perspective-1000"
        >
             {/* Glowing Orb Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>

            <Suspense fallback={null}>
                <Canvas 
                    dpr={[1, 1.5]} 
                    camera={{ position: [0, 2, 6.5], fov: 40 }} 
                    className="z-10"
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
                    <pointLight position={[-10, -5, -10]} intensity={2} color="#3b82f6" />
                    
                    <group>
                        <LaptopModel position={[0, -0.8, 0]} />
                        <Gyroscope />
                    </group>
                    
                    <ContactShadows position={[0, -2.4, 0]} opacity={0.6} scale={15} blur={3} far={4} color="#0f172a" />
                    <Environment preset="city" />
                </Canvas>
            </Suspense>
        </motion.div>

      </div>
    </section>
  );
};
