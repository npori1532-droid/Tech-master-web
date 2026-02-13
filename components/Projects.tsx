
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { SectionTitle, GlassButton } from './UIElements';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Engineered Solutions" subtitle="Selected Works" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    <div className="relative h-full bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-8 flex flex-col hover:transform hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <project.icon size={32} />
                            </div>
                            <div className="flex gap-2">
                                <a href="#" className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-slate-900">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                        <p className="text-slate-600 mb-6 flex-grow">{project.desc}</p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <GlassButton href="https://github.com" variant="secondary">
                View Full Archive
            </GlassButton>
        </div>
      </div>
    </section>
  );
};
