import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ThreeBeanie: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ccff00" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={groupRef} rotation={[0.2, 0, 0]}>
          {/* Main Beanie Body (Top) */}
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[1.5, 64, 64, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
            <MeshDistortMaterial
              color="#050505"
              emissive="#111111"
              roughness={0.4}
              metalness={0.8}
              distort={0.3}
              speed={2}
              wireframe={true}
            />
          </mesh>

          {/* Solid Core for Visibility */}
          <mesh position={[0, 0.5, 0]}>
             <sphereGeometry args={[1.45, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
             <meshStandardMaterial color="#000000" />
          </mesh>
          
          {/* Beanie Cuff (Fold) */}
          <mesh position={[0, 0.2, 0]}>
            <torusGeometry args={[1.4, 0.3, 32, 100]} />
            <meshStandardMaterial
              color="#ccff00"
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>

          {/* Top Pom Pom (Abstract) */}
          <mesh position={[0, 1.9, 0]}>
             <sphereGeometry args={[0.4, 16, 16]} />
             <MeshDistortMaterial 
                color="#ccff00"
                speed={5}
                distort={0.6}
             />
          </mesh>
        </group>
      </Float>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

export default ThreeBeanie;