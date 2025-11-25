import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';

export const Player = () => {
  const playerRef = useRef<THREE.Group>(null);
  const [position, setPosition] = useState<THREE.Vector3>(new THREE.Vector3(0, 1, 0));
  const [velocity] = useState<THREE.Vector3>(new THREE.Vector3());
  const [, get] = useKeyboardControls();

  useFrame((_, delta) => {
    if (!playerRef.current) return;

    const { forward, backward, left, right, run } = get();
    const speed = run ? 8 : 4;
    const moveSpeed = speed * delta;

    velocity.x = 0;
    velocity.z = 0;

    if (forward) velocity.z -= moveSpeed;
    if (backward) velocity.z += moveSpeed;
    if (left) velocity.x -= moveSpeed;
    if (right) velocity.x += moveSpeed;

    position.add(velocity);
    playerRef.current.position.copy(position);
  });

  return (
    <group ref={playerRef} position={[0, 1, 0]}>
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1, 8, 16]} />
        <meshStandardMaterial color="#8B7355" roughness={0.8} metalness={0.2} />
      </mesh>
      
      <mesh castShadow position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#f5d5c0" roughness={0.9} metalness={0.1} />
      </mesh>
      
      <mesh castShadow position={[0, 0.5, 0.1]}>
        <boxGeometry args={[0.5, 0.4, 0.1]} />
        <meshStandardMaterial color="#2c3e50" roughness={0.7} metalness={0.3} />
      </mesh>
    </group>
  );
};
