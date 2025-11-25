export const Road = () => {
  return (
    <group>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
        <planeGeometry args={[8, 100]} />
        <meshStandardMaterial 
          color="#2c3e50"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh 
          key={i}
          receiveShadow 
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[0, 0.06, -45 + i * 5]}
        >
          <planeGeometry args={[0.2, 2]} />
          <meshStandardMaterial 
            color="#ffffff"
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>
      ))}
      
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[-4, 0.06, 0]}>
        <planeGeometry args={[0.15, 100]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[4, 0.06, 0]}>
        <planeGeometry args={[0.15, 100]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};
