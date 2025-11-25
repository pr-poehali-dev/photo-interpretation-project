export const Trees = () => {
  const treePositions = [
    [-25, 0, -20], [-28, 0, -15], [-30, 0, -10], [-32, 0, -5],
    [-25, 0, 15], [-27, 0, 20], [-30, 0, 25], [-28, 0, 30],
    [55, 0, -25], [58, 0, -20], [60, 0, -15], [63, 0, -10],
    [55, 0, 20], [57, 0, 25], [60, 0, 30], [62, 0, 35],
    [-35, 0, -30], [-38, 0, -35], [65, 0, -30], [68, 0, 25],
  ];

  return (
    <group>
      {treePositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          <mesh castShadow receiveShadow position={[0, 2, 0]}>
            <cylinderGeometry args={[0.35, 0.45, 4, 12]} />
            <meshStandardMaterial 
              color="#5d4037"
              roughness={0.95}
              metalness={0.05}
            />
          </mesh>
          
          <mesh castShadow position={[0, 4.5, 0]}>
            <coneGeometry args={[2.5, 3.5, 12]} />
            <meshStandardMaterial 
              color="#2e7d32"
              roughness={0.9}
              metalness={0.05}
            />
          </mesh>
          
          <mesh castShadow position={[0, 6.5, 0]}>
            <coneGeometry args={[2, 3, 12]} />
            <meshStandardMaterial 
              color="#388e3c"
              roughness={0.9}
              metalness={0.05}
            />
          </mesh>
          
          <mesh castShadow position={[0, 8, 0]}>
            <coneGeometry args={[1.5, 2, 12]} />
            <meshStandardMaterial 
              color="#43a047"
              roughness={0.85}
              metalness={0.05}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};
