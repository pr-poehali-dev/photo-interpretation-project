import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Water = () => {
  const waterRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!waterRef.current) return;
    const time = state.clock.getElapsedTime();
    waterRef.current.position.y = Math.sin(time * 0.5) * 0.05;
  });

  return (
    <mesh 
      ref={waterRef}
      receiveShadow 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[30, 0.02, 0]}
    >
      <planeGeometry args={[40, 100]} />
      <meshStandardMaterial 
        color="#4fc3f7"
        transparent
        opacity={0.8}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};
