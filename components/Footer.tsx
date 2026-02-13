
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-slate-900 border-t border-slate-800 pt-16 pb-8 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <div className="md:col-span-2">
            <h3 className="text-xl font-black text-white mb-4">Tech Master</h3>
            <p className="text-slate-400 max-w-sm mb-6">
                Bridging the gap between hardware and software. 
                Delivering excellence in every line of code and every circuit board.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-all">
                    <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all">
                    <Linkedin size={18} />
                </a>
            </div>
        </div>

        <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Hardware Repair</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">System Design</a></li>
            </ul>
        </div>

        <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 gap-4">
         <div>
            &copy; {new Date().getFullYear()} Tech Master x Gajarbotol. All rights reserved.
         </div>
         <div className="flex gap-6">
             <a href="#" className="hover:text-slate-300">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300">Terms of Service</a>
         </div>
      </div>
    </footer>
  );
};
