export const Trees = () => {
  const treePositions = [
    [-25, 0, -20], [-28, 0, -15], [-30, 0, -10],
    [-25, 0, 15], [-27, 0, 20], [-30, 0, 25],
    [45, 0, -25], [48, 0, -20], [50, 0, -15],
    [45, 0, 20], [47, 0, 25], [50, 0, 30],
  ];

  return (
    <group>
      {treePositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          <mesh castShadow position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.3, 0.4, 3, 8]} />
            <meshStandardMaterial 
              color="#6d4c41"
              roughness={0.9}
            />
          </mesh>
          
          <mesh castShadow position={[0, 3.5, 0]}>
            <coneGeometry args={[2, 3, 8]} />
            <meshStandardMaterial 
              color="#558b2f"
              roughness={0.8}
            />
          </mesh>
          
          <mesh castShadow position={[0, 5, 0]}>
            <coneGeometry args={[1.5, 2.5, 8]} />
            <meshStandardMaterial 
              color="#689f38"
              roughness={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};
