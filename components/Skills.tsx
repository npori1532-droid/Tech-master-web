
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, SERVICES } from '../constants';
import { SectionTitle, TiltCard } from './UIElements';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative z-10 py-32 px-6 bg-white/50 backdrop-blur-sm overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        <SectionTitle title="Technical Expertise" subtitle="My Arsenal" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 perspective-1000">
            {SKILLS.map((skill, index) => (
                <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <TiltCard className="h-full">
                        <div className="glass-panel p-8 rounded-3xl h-full bg-gradient-to-b from-white to-slate-50 border border-white shadow-xl flex flex-col items-center text-center group">
                            <div className="absolute -right-6 -top-6 text-slate-100 opacity-50 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                                <skill.icon size={140} strokeWidth={0.5} />
                            </div>
                            
                            <div className="relative z-10">
                                <div 
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-inner mx-auto group-hover:animate-bounce"
                                    style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                                >
                                    <skill.icon size={40} />
                                </div>
                                
                                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{skill.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                                    {skill.desc}
                                </p>
                                
                                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full rounded-full relative overflow-hidden shadow-lg"
                                        style={{ backgroundColor: skill.color }}
                                    >
                                        <div className="absolute inset-0 bg-white/30 w-full animate-shimmer"></div>
                                    </motion.div>
                                </div>
                                <div className="mt-3 w-full flex justify-between text-xs font-black uppercase tracking-wider" style={{ color: skill.color }}>
                                    <span>Beginner</span>
                                    <span>{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>
            ))}
        </div>

        {/* Services Section */}
        <SectionTitle title="Professional Services" subtitle="What I Offer" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <TiltCard>
                        <div className="flex items-center gap-8 p-8 rounded-3xl border border-white bg-white/80 backdrop-blur shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="p-6 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform">
                                <service.icon size={32} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900 mb-2">{service.title}</h4>
                                <p className="text-slate-600 font-medium">{service.desc}</p>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>
            ))}
        </div>

      </div>
      <style>{`
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-shimmer {
            animation: shimmer 2s infinite linear;
        }
      `}</style>
    </section>
  );
};
