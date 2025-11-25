import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const Water = () => {
  const waterRef = useRef<THREE.Mesh>(null);
  
  const waterGeometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(60, 200, 64, 64);
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] = Math.sin(positions[i] * 0.5) * 0.1 + Math.cos(positions[i + 1] * 0.3) * 0.1;
    }
    
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    return geometry;
  }, []);
  
  useFrame((state) => {
    if (!waterRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = waterRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = 
        Math.sin(x * 0.3 + time * 0.5) * 0.15 + 
        Math.cos(y * 0.2 + time * 0.3) * 0.15 +
        Math.sin((x + y) * 0.1 + time * 0.7) * 0.1;
    }
    
    waterRef.current.geometry.attributes.position.needsUpdate = true;
    waterRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh 
      ref={waterRef}
      receiveShadow 
      rotation={[-Math.PI / 2, 0, 0]} 
      position={[40, -0.1, 0]}
      geometry={waterGeometry}
    >
      <meshStandardMaterial 
        color="#4a9eff"
        transparent
        opacity={0.75}
        roughness={0.05}
        metalness={0.9}
        envMapIntensity={1.5}
      />
    </mesh>
  );
};
