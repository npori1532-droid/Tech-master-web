
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html, Text } from '@react-three/drei';
import * as THREE from 'three';

// --- Main Interactive Laptop Components ---

const ScreenContent = () => {
  return (
    <Html
      transform
      occlude
      position={[0, 0.5, -0.06]} // Positioned slightly in front of the screen mesh
      rotation={[-0.25, 0, 0]}
      style={{
        width: '320px',
        height: '210px',
        background: '#0f172a',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div className="w-full h-full bg-slate-900 p-4 text-white font-mono text-xs flex flex-col selection:bg-blue-500">
        <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2">
            <span className="text-blue-400 font-bold tracking-wider">GAJARBOTOL_TERM</span>
            <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
        </div>
        <div className="flex-1 overflow-hidden opacity-90 leading-relaxed">
            <span className="text-green-400">root@techmaster</span>:<span className="text-blue-400">~</span>$ initialize_protocol<br/>
            <span className="text-yellow-300">>></span> Protecting Bangladesh...<br/>
            <span className="text-yellow-300">>></span> Loading Security Modules...<br/>
            <span className="text-green-500">[SUCCESS]</span> Firewall Active<br/>
            <span className="text-green-500">[SUCCESS]</span> Malware Neuralized<br/>
            <br/>
            <span className="text-purple-400">const</span> mission = <span className="text-green-300">"Innovation"</span>;<br/>
            <span className="animate-pulse text-blue-500">█</span>
        </div>
      </div>
    </Html>
  );
};

const OrbitingCode = () => {
  const symbols = ['{ }', '</>', '01', 'JS', 'TS', '🛡️', '⚙️', '⚡'];
  const count = 12;
  
  const particles = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ],
      speed: 0.1 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2
    }));
  }, []);

  return (
    <group>
      {particles.map((p, i) => (
        <FloatingText key={i} {...p} />
      ))}
    </group>
  );
};

const FloatingText = ({ symbol, position, speed, offset }: any) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      // Orbit logic
      const radius = 3.8;
      ref.current.position.x = Math.sin(t * speed + offset) * radius;
      ref.current.position.z = Math.cos(t * speed + offset) * radius;
      ref.current.position.y = Math.sin(t * speed * 1.5 + offset) * 1.5;
      ref.current.lookAt(0, 0, 10); // Always face somewhat forward
    }
  });

  return (
    <group ref={ref}>
      <Text
        fontSize={0.4}
        color="#2563EB"
        font="https://fonts.gstatic.com/s/outfit/v6/QGYvz_MVcBeNP4NjuGObqx1XmO1I4TC0C4e0.woff2"
      >
        {symbol}
      </Text>
    </group>
  );
};

export const LaptopModel = (props: any) => {
  const group = useRef<THREE.Group>(null!);
  const hinge = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if(group.current) {
        // Floating animation
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, (state.mouse.x * Math.PI) / 15, 0.05);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, (state.mouse.y * Math.PI) / 20, 0.05);
    }
  });

  return (
    <group ref={group} {...props}>
      <Float rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[0, 0.4]}>
        {/* Orbiting Code Particles */}
        <OrbitingCode />

        {/* Base */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[4, 0.2, 3]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Keyboard Area */}
        <mesh position={[0, -0.39, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3.6, 1.5]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
        
        {/* Trackpad */}
        <mesh position={[0, -0.39, 1.2]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[1.2, 0.8]} />
            <meshStandardMaterial color="#334155" />
        </mesh>

        {/* Screen Hinge Group */}
        <group ref={hinge} position={[0, -0.4, -1.4]} rotation={[0.25, 0, 0]}>
            {/* Screen Back */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[4, 2.5, 0.1]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.2} />
            </mesh>
            {/* Screen Bezel */}
            <mesh position={[0, 1, 0.06]}>
                <boxGeometry args={[3.8, 2.3, 0.05]} />
                <meshStandardMaterial color="#000000" roughness={0.1} />
            </mesh>
            {/* Interactive Screen Content */}
            <ScreenContent />
            
            {/* Camera Dot */}
            <mesh position={[0, 2.05, 0.09]}>
                <circleGeometry args={[0.03]} />
                <meshBasicMaterial color="#333" />
            </mesh>
        </group>
      </Float>
    </group>
  );
};


// --- Background Holographic Animation Component ---

export const WireframeLaptop = (props: any) => {
    const group = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if(group.current) {
            const t = state.clock.getElapsedTime();
            group.current.rotation.y = Math.sin(t * 0.2) * 0.3;
            group.current.rotation.z = Math.cos(t * 0.1) * 0.1;
        }
    });

    return (
        <group ref={group} {...props}>
             <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <group rotation={[0.3, -0.5, 0]} scale={1.2}>
                     {/* Abstract Laptop Base */}
                    <mesh position={[0, -0.5, 0]}>
                        <boxGeometry args={[4, 0.1, 3]} />
                        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
                    </mesh>
                    
                    {/* Abstract Laptop Screen */}
                    <mesh position={[0, 1, -1.4]} rotation={[0.25, 0, 0]}>
                        <boxGeometry args={[4, 2.5, 0.1]} />
                        <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.15} />
                    </mesh>

                    {/* Floating Data Particles */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <mesh key={i} position={[
                            (Math.random() - 0.5) * 6,
                            (Math.random() - 0.5) * 4,
                            (Math.random() - 0.5) * 4
                        ]}>
                            <boxGeometry args={[0.05, 0.05, 0.05]} />
                            <meshBasicMaterial color={Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6"} />
                        </mesh>
                    ))}
                </group>
             </Float>
        </group>
    )
}
