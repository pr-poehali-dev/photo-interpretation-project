export const Road = () => {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[8, 150]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>
      
      {Array.from({ length: 25 }).map((_, i) => (
        <mesh 
          key={`center-${i}`}
          receiveShadow 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, 0.03, -60 + i * 5]}
        >
          <planeGeometry args={[0.15, 2.5]} />
          <meshStandardMaterial 
            color="#ffffff"
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>
      ))}
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-4, 0.03, 0]}>
        <planeGeometry args={[0.12, 150]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[4, 0.03, 0]}>
        <planeGeometry args={[0.12, 150]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
};
