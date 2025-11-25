import { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';

export const Player = () => {
  const { camera } = useThree();
  const positionRef = useRef(new THREE.Vector3(0, 1.6, 0));
  const velocityRef = useRef(new THREE.Vector3());
  const directionRef = useRef(new THREE.Vector3());
  const [, get] = useKeyboardControls();

  useEffect(() => {
    camera.position.copy(positionRef.current);
    camera.rotation.order = 'YXZ';
  }, [camera]);

  useFrame((_, delta) => {
    const { forward, backward, left, right, run } = get();
    const speed = run ? 8 : 4;
    const moveSpeed = speed * delta;

    directionRef.current.set(0, 0, 0);

    if (forward) directionRef.current.z -= 1;
    if (backward) directionRef.current.z += 1;
    if (left) directionRef.current.x -= 1;
    if (right) directionRef.current.x += 1;

    if (directionRef.current.length() > 0) {
      directionRef.current.normalize();
      directionRef.current.applyQuaternion(camera.quaternion);
      directionRef.current.y = 0;
      directionRef.current.normalize();
      directionRef.current.multiplyScalar(moveSpeed);

      positionRef.current.add(directionRef.current);
    }

    positionRef.current.y = 1.6;
    camera.position.copy(positionRef.current);
  });

  return null;
};
