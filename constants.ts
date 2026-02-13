import { Cpu, Smartphone, Aperture, Terminal, Globe, Shield, Users, Layers, HardDrive, Wifi, Cloud, MessageCircle, Youtube, Facebook, Send } from 'lucide-react';

export const COLORS = {
  background: '#F8FAFC', // Slate 50 (Light)
  primary: '#2563EB', // Blue 600
  secondary: '#7C3AED', // Violet 600
  accent: '#10B981', // Emerald 500
  text: '#0F172A', // Slate 900
  muted: '#64748B', // Slate 500
  border: '#E2E8F0' // Slate 200
};

export const SITE_DATA = {
    name: "Tech Master x Gajarbotol",
    title: "Computer Engineer & Developer",
    slogan: "We are protect Bangladesh",
    email: "tommama612@gmail.com",
    bio: "Driven by a passion for innovation, Tech Master is an all-rounder in the digital landscape. A skilled Computer Engineer and Mobile Service expert by day, and a creative Photographer and Slowmo Dancer by heart. Currently, he shapes the future as a Developer and the visionary Admin of Gajarbotolz Team."
};

export const LINKS = {
  facebook: 'https://www.facebook.com/share/1AV8aD9rGD/',
  youtube: 'https://youtube.com/@masterjha2z720?si=ubrtKxyVN_Lo0VwB',
  website: 'https://www.gajarbotol.site/',
  telegramChannel: 'https://t.me/tech_master_a2z',
  backupChannel: 'https://t.me/GAJARBOTOL_OFFICIAL',
  officialTelegram: 'https://t.me/GAJARBOTOLZ',
  chatGroup1: 'https://t.me/gajarbotolxchat',
  chatGroup2: 'https://t.me/tech_chatx'
};

export const PROFILE_IMAGE = 'https://www.gajarbotol.site/Tech_master/Tech_master_profile.jpg';

export const SKILLS = [
  { 
    id: 1, 
    title: 'Computer Engineering', 
    icon: Cpu, 
    desc: 'System architecture, hardware diagnostics, and performance optimization.',
    level: 98,
    color: '#2563EB'
  },
  { 
    id: 2, 
    title: 'Full Stack Dev', 
    icon: Terminal, 
    desc: 'Building scalable web applications with React, Node.js, and Modern UI/UX.',
    level: 92,
    color: '#7C3AED'
  },
  { 
    id: 3, 
    title: 'Mobile Engineering', 
    icon: Smartphone, 
    desc: 'Advanced mobile device repair, flashing, and software debugging.',
    level: 95,
    color: '#10B981'
  },
  { 
    id: 4, 
    title: 'Cinematography', 
    icon: Aperture, 
    desc: 'Professional photography and visual storytelling.',
    level: 85,
    color: '#F59E0B'
  },
];

export const SERVICES = [
    {
        title: "Web Development",
        icon: Globe,
        desc: "Custom websites with 3D interactions."
    },
    {
        title: "Hardware Repair",
        icon: HardDrive,
        desc: "Desktop & Laptop chip-level service."
    },
    {
        title: "Network Security",
        icon: Shield,
        desc: "Securing digital assets and infrastructure."
    },
    {
        title: "Creative Arts",
        icon: Layers,
        desc: "Video editing and motion graphics."
    }
];

export const PROJECTS = [
  {
    title: "Neural Network Visualizer",
    desc: "A 3D interactive dashboard to visualize AI learning processes in real-time.",
    tech: ["React", "Three.js", "Python"],
    icon: Cpu,
    color: "#2563EB"
  },
  {
    title: "Secure Cloud OS",
    desc: "Browser-based operating system simulation with encrypted file storage.",
    tech: ["TypeScript", "Node.js", "WebAssembly"],
    icon: Cloud,
    color: "#7C3AED"
  },
  {
    title: "IoT Control Hub",
    desc: "Centralized interface for smart home devices using MQTT protocols.",
    tech: ["IoT", "Raspberry Pi", "Socket.io"],
    icon: Wifi,
    color: "#10B981"
  }
];

export const TECH_STACK = [
  "React", "TypeScript", "Node.js", "Python", "C++", "Next.js", "Tailwind", "Three.js", "Docker", "AWS", "Git", "Linux", "Arduino"
];

// Expanded Link List for Hero Section with new links
export const HERO_LINKS = [
    { name: 'Website', url: LINKS.website, icon: Globe, color: '#2563EB' },
    { name: 'Facebook', url: LINKS.facebook, icon: Facebook, color: '#1877F2' },
    { name: 'YouTube', url: LINKS.youtube, icon: Youtube, color: '#EF4444' },
    { name: 'Tech Master', url: LINKS.telegramChannel, icon: Send, color: '#229ED9' },
    { name: 'Backup CH', url: LINKS.backupChannel, icon: Shield, color: '#0EA5E9' },
    { name: 'Official TG', url: LINKS.officialTelegram, icon: Send, color: '#229ED9' },
    { name: 'Chat Grp 1', url: LINKS.chatGroup1, icon: MessageCircle, color: '#8B5CF6' },
    { name: 'Chat Grp 2', url: LINKS.chatGroup2, icon: MessageCircle, color: '#8B5CF6' },
];

export const SOCIAL_LINKS = HERO_LINKS;