import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';

export const Player = () => {
  const playerRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const velocityRef = useRef(new THREE.Vector3());
  const directionRef = useRef(new THREE.Vector3());
  const [, get] = useKeyboardControls();

  useEffect(() => {
    if (playerRef.current) {
      camera.position.copy(playerRef.current.position);
      camera.position.y += 1.6;
    }
  }, [camera]);

  useFrame((_, delta) => {
    if (!playerRef.current) return;

    const { forward, backward, left, right, run } = get();
    const speed = run ? 8 : 4;
    const moveSpeed = speed * delta;

    directionRef.current.set(0, 0, 0);

    if (forward) directionRef.current.z -= 1;
    if (backward) directionRef.current.z += 1;
    if (left) directionRef.current.x -= 1;
    if (right) directionRef.current.x += 1;

    directionRef.current.normalize();
    directionRef.current.applyEuler(camera.rotation);
    directionRef.current.y = 0;
    directionRef.current.normalize();
    directionRef.current.multiplyScalar(moveSpeed);

    playerRef.current.position.add(directionRef.current);
    playerRef.current.position.y = 1.6;

    camera.position.copy(playerRef.current.position);
  });

  return (
    <group ref={playerRef} position={[0, 1.6, 0]}>
      <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
        <capsuleGeometry args={[0.3, 1, 8, 16]} />
        <meshStandardMaterial 
          color="#3a3a3a"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
      
      <mesh castShadow position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial 
          color="#f5d5c0"
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>
      
      <mesh castShadow position={[0, -0.3, 0.15]}>
        <boxGeometry args={[0.45, 0.6, 0.2]} />
        <meshStandardMaterial 
          color="#1e3a5f"
          roughness={0.75}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
};
