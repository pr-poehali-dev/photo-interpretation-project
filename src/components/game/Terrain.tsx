import { useMemo } from 'react';
import * as THREE from 'three';

export const Terrain = () => {
  const terrainGeometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(300, 300, 100, 100);
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = 
        Math.sin(x * 0.05) * 0.8 + 
        Math.cos(y * 0.05) * 0.8 + 
        Math.random() * 0.3;
    }
    
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  return (
    <>
      <mesh 
        receiveShadow 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]}
        geometry={terrainGeometry}
      >
        <meshStandardMaterial 
          color="#6b8e23"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>
    </>
  );
};
