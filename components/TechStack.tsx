
import React from 'react';
import { TECH_STACK } from '../constants';

export const TechStack: React.FC = () => {
  return (
    <div className="relative z-10 py-12 bg-white/30 backdrop-blur-sm border-y border-slate-200 overflow-hidden">
        <div className="flex items-center gap-12 animate-scroll whitespace-nowrap">
            {/* Repeat the list twice to create infinite scroll illusion */}
            {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-default">
                    <span className="text-xl md:text-3xl font-black text-slate-300 uppercase tracking-tighter group-hover:text-blue-600 transition-colors duration-300">
                        {tech}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-400"></div>
                </div>
            ))}
        </div>
        
        {/* CSS for infinite scroll animation */}
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
            }
            .animate-scroll {
                animation: scroll 30s linear infinite;
                width: fit-content;
            }
            .animate-scroll:hover {
                animation-play-state: paused;
            }
        `}} />
    </div>
  );
};
