
import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Code2 } from 'lucide-react';
import { SectionTitle } from './UIElements';

export const Team: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-6 bg-slate-100/50">
      <div className="max-w-6xl mx-auto text-center">
        
        <SectionTitle title="The Gajarbotol Team" subtitle="Collective Intelligence" />

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-panel p-12 rounded-3xl overflow-hidden max-w-4xl mx-auto bg-white"
        >
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 pointer-events-none opacity-50"></div>
            
            <div className="relative z-10">
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-10 font-light italic">
                    "Innovation is not just about writing code; it's about engineering solutions that change lives. 
                    Our team represents the pinnacle of dedication, security, and technical prowess."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                            <Code2 size={24} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Development</h4>
                        <p className="text-sm text-slate-500">Full-Stack Engineering</p>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center transform md:-translate-y-4">
                         <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                            <ShieldCheck size={24} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Security</h4>
                        <p className="text-sm text-slate-500">Asset Protection</p>
                    </div>
                    
                    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                         <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4">
                            <Users size={24} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-1">Community</h4>
                        <p className="text-sm text-slate-500">Growing Network</p>
                    </div>
                </div>

                 <div className="mt-10">
                    <span className="inline-block px-4 py-2 rounded-full bg-slate-900 text-sm text-white shadow-lg">
                        System Status: <span className="text-emerald-400 font-bold ml-1">Operational</span>
                    </span>
                 </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
