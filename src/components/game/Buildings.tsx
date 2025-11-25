export const Buildings = () => {
  const buildings = [
    { pos: [-15, 3, -10], size: [6, 6, 8], color: '#d32f2f', material: 'brick' },
    { pos: [-15, 2.5, 5], size: [5, 5, 6], color: '#757575', material: 'concrete' },
    { pos: [15, 2, -15], size: [4, 4, 5], color: '#8d6e63', material: 'wood' },
    { pos: [15, 3.5, 10], size: [7, 7, 9], color: '#90a4ae', material: 'panel' },
  ];

  return (
    <group>
      {buildings.map((building, idx) => (
        <group key={idx} position={building.pos}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={building.size} />
            <meshStandardMaterial 
              color={building.color}
              roughness={0.8}
              metalness={0.2}
            />
          </mesh>
          
          <mesh position={[0, building.size[1] / 2 + 0.1, building.size[2] / 2 - 0.5]}>
            <boxGeometry args={[1.5, 2, 0.2]} />
            <meshStandardMaterial 
              color="#6d4c41"
              roughness={0.9}
            />
          </mesh>
          
          {[...Array(3)].map((_, i) => (
            <mesh 
              key={i}
              position={[
                -building.size[0] / 3 + i * (building.size[0] / 3),
                building.size[1] / 3,
                building.size[2] / 2 + 0.05
              ]}
            >
              <boxGeometry args={[0.8, 1, 0.1]} />
              <meshStandardMaterial 
                color="#ffffff"
                transparent
                opacity={0.3}
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};
