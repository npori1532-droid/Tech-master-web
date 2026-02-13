
import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const InstallPWA: React.FC = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const onClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
    promptInstall.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        setSupportsPWA(false);
    });
  };

  const closePrompt = () => {
      setSupportsPWA(false);
  }

  return (
    <AnimatePresence>
      {supportsPWA && (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2"
        >
            <div className="bg-slate-900/90 backdrop-blur-md text-white p-1 rounded-full shadow-lg flex items-center gap-1 pr-4 pl-1 border border-slate-700">
                <button 
                    onClick={closePrompt}
                    className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                    <X size={16} />
                </button>
                <button
                    id="setup_button"
                    aria-label="Install App"
                    title="Install App"
                    className="flex items-center gap-2 text-sm font-bold hover:text-blue-300 transition-colors"
                    onClick={onClick}
                >
                    <Download size={18} className="text-blue-400" />
                    <span>Install App</span>
                </button>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
