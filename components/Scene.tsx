
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../constants';

const FloatingParticles = () => {
    const ref = useRef<THREE.Group>(null);
    const count = 300;
    
    // Generate random positions for particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 50;
            const y = (Math.random() - 0.5) * 50;
            const z = (Math.random() - 0.5) * 50;
            temp.push({ x, y, z, speed: Math.random() * 0.2 });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (ref.current) {
            // Rotate the entire particle system slowly
            ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            ref.current.rotation.z = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <group ref={ref}>
            {particles.map((pos, i) => (
                 <mesh key={i} position={[pos.x, pos.y, pos.z]}>
                    <octahedronGeometry args={[0.2, 0]} />
                    <meshStandardMaterial 
                        color={i % 2 === 0 ? COLORS.primary : COLORS.secondary} 
                        emissive={i % 2 === 0 ? COLORS.primary : COLORS.secondary}
                        emissiveIntensity={2}
                        transparent
                        opacity={0.6}
                    />
                 </mesh>
            ))}
        </group>
    );
};

const HyperGrid = () => {
    const ref = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        if (ref.current) {
            // Move the grid towards the camera to create speed effect
            ref.current.position.z = (state.clock.getElapsedTime() * 5) % 10;
        }
    });

    return (
        <group ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
            <gridHelper args={[100, 50, COLORS.secondary, '#cbd5e1']} />
            {/* Top Grid for Tunnel Effect */}
            <group position={[0, -20, 0]}> 
                 <gridHelper args={[100, 50, COLORS.primary, '#cbd5e1']} />
            </group>
        </group>
    );
};

export const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-slate-50 pointer-events-none">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ antialias: true, preserveDrawingBuffer: true, powerPreference: "high-performance" }}
        performance={{ min: 0.5 }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={60} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={COLORS.primary} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color={COLORS.secondary} />
        <spotLight position={[0, 0, 50]} angle={0.5} penumbra={1} intensity={1} color="#ffffff" />

        {/* 3D Elements */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
        <FloatingParticles />
        <HyperGrid />
        
        {/* Atmospheric Fog */}
        <fog attach="fog" args={['#F8FAFC', 10, 60]} />
      </Canvas>
    </div>
  );
};
