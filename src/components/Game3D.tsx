import { Canvas } from '@react-three/fiber';
import { Sky, KeyboardControls, PointerLockControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Player } from './game/Player';
import { Terrain } from './game/Terrain';
import { Road } from './game/Road';
import { Water } from './game/Water';
import { Buildings } from './game/Buildings';
import { Trees } from './game/Trees';
import { GameUI } from './game/GameUI';
import { AudioSystem } from './game/AudioSystem';

export const Game3D = () => {
  return (
    <div className="w-full h-screen relative">
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
            
            <PointerLockControls />
          </Suspense>
        </Canvas>
        
        <GameUI />
      </KeyboardControls>
    </div>
  );
};