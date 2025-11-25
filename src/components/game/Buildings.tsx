export const Buildings = () => {
  const buildings = [
    { pos: [-15, 3, -10], size: [6, 6, 8], color: '#a85858', material: 'brick', roughness: 0.95 },
    { pos: [-15, 2.5, 5], size: [5, 5, 6], color: '#8a8a8a', material: 'concrete', roughness: 0.85 },
    { pos: [15, 2, -15], size: [4, 4, 5], color: '#8d6e5f', material: 'wood', roughness: 0.9 },
    { pos: [15, 3.5, 10], size: [7, 7, 9], color: '#95a5ae', material: 'panel', roughness: 0.75 },
    { pos: [-25, 2, 20], size: [5, 4, 6], color: '#7a5c4a', material: 'wood', roughness: 0.9 },
    { pos: [25, 3, -25], size: [6, 6, 7], color: '#9a6a6a', material: 'brick', roughness: 0.95 },
  ];

  return (
    <group>
      {buildings.map((building, idx) => (
        <group key={idx} position={building.pos}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={building.size} />
            <meshStandardMaterial 
              color={building.color}
              roughness={building.roughness}
              metalness={0.05}
            />
          </mesh>
          
          <mesh castShadow position={[0, -building.size[1] / 2 + 1, building.size[2] / 2 + 0.05]}>
            <boxGeometry args={[1.2, 2, 0.15]} />
            <meshStandardMaterial 
              color="#6d4c41"
              roughness={0.95}
              metalness={0.05}
            />
          </mesh>
          
          <mesh position={[-building.size[0] / 2 + 0.6, -building.size[1] / 2 + 1, building.size[2] / 2 + 0.05]}>
            <boxGeometry args={[0.05, 2, 0.15]} />
            <meshStandardMaterial 
              color="#4a3a2a"
              roughness={0.9}
            />
          </mesh>
          <mesh position={[building.size[0] / 2 - 0.6, -building.size[1] / 2 + 1, building.size[2] / 2 + 0.05]}>
            <boxGeometry args={[0.05, 2, 0.15]} />
            <meshStandardMaterial 
              color="#4a3a2a"
              roughness={0.9}
            />
          </mesh>
          
          {[...Array(Math.floor(building.size[0] / 2))].map((_, i) => (
            <group key={i}>
              <mesh 
                position={[
                  -building.size[0] / 2 + 1 + i * 2,
                  building.size[1] / 4,
                  building.size[2] / 2 + 0.05
                ]}
              >
                <boxGeometry args={[0.8, 1, 0.05]} />
                <meshStandardMaterial 
                  color="#e8f4f8"
                  transparent
                  opacity={0.4}
                  roughness={0.05}
                  metalness={0.95}
                />
              </mesh>
              <mesh 
                position={[
                  -building.size[0] / 2 + 1 + i * 2,
                  building.size[1] / 4,
                  building.size[2] / 2 + 0.04
                ]}
              >
                <boxGeometry args={[0.85, 1.05, 0.03]} />
                <meshStandardMaterial 
                  color="#ffffff"
                  roughness={0.6}
                  metalness={0.3}
                />
              </mesh>
            </group>
          ))}
          
          <mesh castShadow position={[-building.size[0] / 2 + 2.5, -building.size[1] / 2 + 0.5, building.size[2] / 2 + 0.1]}>
            <boxGeometry args={[2, 1, 0.2]} />
            <meshStandardMaterial 
              color="#7a5a3a"
              roughness={0.9}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};
