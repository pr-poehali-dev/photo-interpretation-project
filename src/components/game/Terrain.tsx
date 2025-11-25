import { useMemo } from 'react';
import * as THREE from 'three';

export const Terrain = () => {
  const terrainGeometry = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(200, 200, 50, 50);
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] = Math.random() * 0.5;
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
          color="#7cb342"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      <gridHelper args={[200, 40, '#555555', '#333333']} position={[0, 0.01, 0]} />
    </>
  );
};
