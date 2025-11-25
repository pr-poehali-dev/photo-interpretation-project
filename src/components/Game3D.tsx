import { Canvas } from '@react-three/fiber';
import { Sky, OrbitControls, KeyboardControls } from '@react-three/drei';
import { Suspense } from 'react';
import { Player } from './game/Player';
import { Terrain } from './game/Terrain';
import { Road } from './game/Road';
import { Water } from './game/Water';
import { Buildings } from './game/Buildings';
import { Trees } from './game/Trees';
import { GameUI } from './game/GameUI';

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
          camera={{ position: [0, 5, 10], fov: 75 }}
          className="bg-gradient-to-b from-sky-400 to-sky-200"
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
            
            <Sky sunPosition={[100, 20, 100]} />
            
            <Terrain />
            <Road />
            <Water />
            <Buildings />
            <Trees />
            <Player />
            
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              maxPolarAngle={Math.PI / 2}
              minDistance={5}
              maxDistance={50}
            />
          </Suspense>
        </Canvas>
        
        <GameUI />
      </KeyboardControls>
    </div>
  );
};
