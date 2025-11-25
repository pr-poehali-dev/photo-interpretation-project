import { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const AudioSystem = () => {
  const { camera } = useThree();
  const audioListenerRef = useRef<THREE.AudioListener | null>(null);
  const musicRef = useRef<THREE.Audio | null>(null);
  const ambienceRef = useRef<THREE.Audio | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);
    audioListenerRef.current = listener;

    const audioLoader = new THREE.AudioLoader();
    
    const music = new THREE.Audio(listener);
    const ambience = new THREE.Audio(listener);
    
    musicRef.current = music;
    ambienceRef.current = ambience;

    const rockMusic = 'https://cdn.pixabay.com/audio/2022/03/10/audio_4a156e5223.mp3';
    const natureSounds = 'https://cdn.pixabay.com/audio/2022/03/10/audio_c8c3f8c8e6.mp3';

    let loadedCount = 0;
    const checkLoaded = () => {
      loadedCount++;
      if (loadedCount === 2) setIsLoaded(true);
    };

    audioLoader.load(
      rockMusic,
      (buffer) => {
        music.setBuffer(buffer);
        music.setLoop(true);
        music.setVolume(0.3);
        checkLoaded();
      },
      undefined,
      (error) => {
        console.error('Error loading music:', error);
        checkLoaded();
      }
    );

    audioLoader.load(
      natureSounds,
      (buffer) => {
        ambience.setBuffer(buffer);
        ambience.setLoop(true);
        ambience.setVolume(0.5);
        checkLoaded();
      },
      undefined,
      (error) => {
        console.error('Error loading ambience:', error);
        checkLoaded();
      }
    );

    const handleInteraction = () => {
      if (isLoaded && musicRef.current && ambienceRef.current) {
        if (!musicRef.current.isPlaying) musicRef.current.play();
        if (!ambienceRef.current.isPlaying) ambienceRef.current.play();
      }
      document.removeEventListener('click', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      if (musicRef.current) musicRef.current.stop();
      if (ambienceRef.current) ambienceRef.current.stop();
      if (audioListenerRef.current && camera) {
        camera.remove(audioListenerRef.current);
      }
    };
  }, [camera, isLoaded]);

  return null;
};
