
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, SITE_DATA } from '../constants';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { SectionTitle, MagneticButton, TiltCard } from './UIElements';

export const SocialHub: React.FC = () => {
  return (
    <section id="contact" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Initialize Connection" subtitle="Contact Protocol" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <TiltCard>
                    <div className="glass-panel p-10 rounded-3xl bg-gradient-to-br from-white to-blue-50/50 border border-white shadow-2xl">
                        <h3 className="text-3xl font-black mb-6 text-slate-900">Direct Uplink</h3>
                        <p className="text-slate-600 mb-10 text-lg font-medium">
                            Have a project in mind or need expert hardware consultation? 
                            I'm available for freelance work and professional partnerships.
                        </p>
                        
                        <div className="space-y-6">
                            <a href={`mailto:${SITE_DATA.email}`} className="flex items-center gap-6 text-slate-700 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-pointer group">
                                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-blue-500 uppercase font-black tracking-widest mb-1">Email Address</div>
                                    <div className="font-bold text-xl">{SITE_DATA.email}</div>
                                </div>
                            </a>
                            <div className="flex items-center gap-6 text-slate-700 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-default group">
                                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="text-xs text-purple-500 uppercase font-black tracking-widest mb-1">Base Location</div>
                                    <div className="font-bold text-xl">Dhaka, Bangladesh</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-10 border-t border-slate-200">
                             <h4 className="text-sm font-black text-slate-400 mb-6 uppercase tracking-widest">Secure Channels</h4>
                             <div className="grid grid-cols-2 gap-4">
                                {SOCIAL_LINKS.map((link, idx) => (
                                    <a 
                                        key={idx} 
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors group p-2 rounded-lg hover:bg-blue-50"
                                    >
                                        <link.icon size={18} style={{ color: link.color }} />
                                        <span className="font-bold">{link.name}</span>
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0" />
                                    </a>
                                ))}
                             </div>
                        </div>
                    </div>
                </TiltCard>
            </motion.div>

            {/* Simple Form */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <TiltCard className="h-full">
                    <div className="glass-panel p-10 rounded-3xl flex flex-col justify-center bg-white h-full shadow-2xl">
                        <div className="mb-8">
                            <div className="font-mono text-blue-600 mb-2 font-bold animate-pulse">_transmit_message.exe</div>
                            <h3 className="text-3xl font-black text-slate-900">Send Transmission</h3>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="block text-xs text-slate-500 font-bold mb-2 uppercase group-focus-within:text-blue-600 transition-colors">Name</label>
                                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 font-bold focus:outline-none focus:border-blue-500 transition-all shadow-inner" placeholder="John Doe" />
                                </div>
                                <div className="group">
                                    <label className="block text-xs text-slate-500 font-bold mb-2 uppercase group-focus-within:text-blue-600 transition-colors">Email</label>
                                    <input type="email" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 font-bold focus:outline-none focus:border-blue-500 transition-all shadow-inner" placeholder={SITE_DATA.email} />
                                </div>
                            </div>
                            <div className="group">
                                <label className="block text-xs text-slate-500 font-bold mb-2 uppercase group-focus-within:text-blue-600 transition-colors">Subject</label>
                                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 font-bold focus:outline-none focus:border-blue-500 transition-all shadow-inner">
                                    <option>Web Development Inquiry</option>
                                    <option>Hardware Repair Service</option>
                                    <option>Collaboration</option>
                                    <option>Gajarbotol Access</option>
                                </select>
                            </div>
                            <div className="group">
                                <label className="block text-xs text-slate-500 font-bold mb-2 uppercase group-focus-within:text-blue-600 transition-colors">Message</label>
                                <textarea rows={5} className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-4 text-slate-900 font-medium focus:outline-none focus:border-blue-500 transition-all shadow-inner" placeholder="Enter your encrypted message..."></textarea>
                            </div>
                            <MagneticButton className="w-full mt-4 bg-slate-900 text-white hover:bg-slate-800 shadow-xl">
                                Send Encrypted Data <Send size={18} />
                            </MagneticButton>
                        </form>
                    </div>
                </TiltCard>
            </motion.div>

        </div>
      </div>
    </section>
  );
};