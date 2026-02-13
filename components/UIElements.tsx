
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const GradientText: React.FC<{ text: string; className?: string; as?: any }> = ({ text, className = "", as: Component = 'span' }) => {
  return (
    <Component className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-gradient-x ${className}`}>
      {text}
    </Component>
  );
};

// --- 3D Magnetic Button ---
export const MagneticButton: React.FC<{ children: React.ReactNode; onClick?: () => void; href?: string; className?: string; variant?: 'primary' | 'secondary' }> = ({ children, onClick, href, className = "", variant = 'primary' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((e.clientX - centerX) * 0.3); // Magnet strength
        y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 font-bold rounded-lg overflow-hidden transition-all duration-300";
    const variantClasses = variant === 'primary' 
      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)]" 
      : "bg-white text-gray-800 border border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-lg";

    const content = (
        <motion.div
            ref={ref}
            style={{ x: xSpring, y: ySpring }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${baseClasses} ${variantClasses} ${className}`}
                onClick={onClick}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] hover:translate-x-[150%] transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">{children}</span>
            </motion.button>
        </motion.div>
    );

    if (href) {
        return <a href={href} className="inline-block">{content}</a>;
    }
    return content;
};

// --- 3D Tilt Card Container ---
export const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`relative ${className}`}
        >
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>
            {/* Reflection Glare */}
            <motion.div 
                style={{ x, y }}
                className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none mix-blend-overlay"
            />
        </motion.div>
    );
}

// Backwards compatibility shim
export const GlassButton = MagneticButton; 

export const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="mb-16 text-center relative z-10 perspective-1000">
        <motion.div 
            initial={{ opacity: 0, y: -50, rotateX: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-block px-6 py-2 mb-4 text-xs font-bold tracking-[0.3em] text-blue-600 uppercase bg-blue-50/80 backdrop-blur rounded-full border border-blue-200 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
        >
            {subtitle}
        </motion.div>
        <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 drop-shadow-lg"
        >
            {title}
        </motion.h2>
        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="h-2 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 mx-auto mt-6 rounded-full shadow-lg"
        />
    </div>
);
