import { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';

interface MobileControlsProps {
  onMove: (x: number, y: number) => void;
  onLook: (deltaX: number, deltaY: number) => void;
}

export const MobileControls = ({ onMove, onLook }: MobileControlsProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const joystickRef = useRef<HTMLDivElement>(null);
  const lookAreaRef = useRef<HTMLDivElement>(null);
  const joystickStartRef = useRef({ x: 0, y: 0 });
  const lookStartRef = useRef({ x: 0, y: 0 });
  const activeTouchRef = useRef<number | null>(null);
  const lookTouchRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleJoystickStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    
    activeTouchRef.current = touch.identifier;
    joystickStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleJoystickMove = (e: React.TouchEvent) => {
    if (activeTouchRef.current === null) return;
    
    const touch = Array.from(e.touches).find(t => t.identifier === activeTouchRef.current);
    if (!touch) return;

    const deltaX = touch.clientX - joystickStartRef.current.x;
    const deltaY = touch.clientY - joystickStartRef.current.y;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 50;
    const clampedDistance = Math.min(distance, maxDistance);
    
    const angle = Math.atan2(deltaY, deltaX);
    const normalizedX = (Math.cos(angle) * clampedDistance) / maxDistance;
    const normalizedY = (Math.sin(angle) * clampedDistance) / maxDistance;
    
    onMove(normalizedX, -normalizedY);
  };

  const handleJoystickEnd = () => {
    activeTouchRef.current = null;
    onMove(0, 0);
  };

  const handleLookStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    
    lookTouchRef.current = touch.identifier;
    lookStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleLookMove = (e: React.TouchEvent) => {
    if (lookTouchRef.current === null) return;
    
    const touch = Array.from(e.touches).find(t => t.identifier === lookTouchRef.current);
    if (!touch) return;

    const deltaX = touch.clientX - lookStartRef.current.x;
    const deltaY = touch.clientY - lookStartRef.current.y;
    
    onLook(deltaX * 0.003, deltaY * 0.003);
    
    lookStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleLookEnd = () => {
    lookTouchRef.current = null;
  };

  if (!isMobile) return null;

  return (
    <>
      <div
        ref={joystickRef}
        className="fixed bottom-8 left-8 w-32 h-32 bg-white/20 rounded-full border-4 border-white/40 backdrop-blur-sm touch-none z-50"
        onTouchStart={handleJoystickStart}
        onTouchMove={handleJoystickMove}
        onTouchEnd={handleJoystickEnd}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/60 rounded-full" />
      </div>
      
      <div
        ref={lookAreaRef}
        className="fixed top-0 right-0 w-1/2 h-full touch-none z-40"
        onTouchStart={handleLookStart}
        onTouchMove={handleLookMove}
        onTouchEnd={handleLookEnd}
      />
      
      <div className="fixed top-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm z-50">
        👆 Правая сторона - обзор | 🕹️ Левый джойстик - движение
      </div>
    </>
  );
};
