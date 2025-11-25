import { Canvas, useThree } from '@react-three/fiber';
import { Sky, KeyboardControls } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import { Player } from './game/Player';
import { Terrain } from './game/Terrain';
import { Road } from './game/Road';
import { Water } from './game/Water';
import { Buildings } from './game/Buildings';
import { Trees } from './game/Trees';
import { GameUI } from './game/GameUI';
import { AudioSystem } from './game/AudioSystem';
import { MobileControls } from './game/MobileControls';
import * as THREE from 'three';

const CameraController = ({ 
  moveInput, 
  lookInput 
}: { 
  moveInput: { x: number; y: number }; 
  lookInput: { x: number; y: number } 
}) => {
  const { camera } = useThree();
  const eulerRef = useRef(new THREE.Euler(0, 0, 0, 'YXZ'));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement) {
        eulerRef.current.setFromQuaternion(camera.quaternion);
        eulerRef.current.y -= e.movementX * 0.002;
        eulerRef.current.x -= e.movementY * 0.002;
        eulerRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, eulerRef.current.x));
        camera.quaternion.setFromEuler(eulerRef.current);
      }
    };

    const handleClick = () => {
      document.body.requestPointerLock();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, [camera]);

  useEffect(() => {
    if (lookInput.x !== 0 || lookInput.y !== 0) {
      eulerRef.current.setFromQuaternion(camera.quaternion);
      eulerRef.current.y -= lookInput.x;
      eulerRef.current.x -= lookInput.y;
      eulerRef.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, eulerRef.current.x));
      camera.quaternion.setFromEuler(eulerRef.current);
    }
  }, [lookInput, camera]);

  return null;
};

export const Game3D = () => {
  const [moveInput, setMoveInput] = useState({ x: 0, y: 0 });
  const [lookInput, setLookInput] = useState({ x: 0, y: 0 });

  const handleMove = (x: number, y: number) => {
    setMoveInput({ x, y });
  };

  const handleLook = (deltaX: number, deltaY: number) => {
    setLookInput({ x: deltaX, y: deltaY });
  };

  return (
    <div className="w-full h-screen relative touch-none">
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'left', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'right', keys: ['ArrowRight', 'KeyD'] },
          { name: 'jump', keys: ['Space'] },
          { name: 'run', keys: ['ShiftLeft'] },
        ]}
      >
        <Canvas
          shadows
          camera={{ position: [0, 1.6, 0], fov: 75 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <directionalLight
              position={[50, 50, 25]}
              intensity={1.5}
              castShadow
              shadow-mapSize={[4096, 4096]}
              shadow-camera-far={100}
              shadow-camera-left={-50}
              shadow-camera-right={50}
              shadow-camera-top={50}
              shadow-camera-bottom={-50}
            />
            <hemisphereLight intensity={0.2} groundColor="#444444" />
            
            <Sky 
              sunPosition={[100, 20, 100]}
              turbidity={8}
              rayleigh={2}
              mieCoefficient={0.005}
              mieDirectionalG={0.8}
            />
            <fog attach="fog" args={['#a0d8f1', 50, 200]} />
            
            <Terrain />
            <Road />
            <Water />
            <Buildings />
            <Trees />
            <Player />
            <AudioSystem />
            <CameraController moveInput={moveInput} lookInput={lookInput} />
          </Suspense>
        </Canvas>
        
        <GameUI />
        <MobileControls onMove={handleMove} onLook={handleLook} />
      </KeyboardControls>
    </div>
  );
};
