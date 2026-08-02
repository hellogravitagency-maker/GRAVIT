import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, SMAA, Noise, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { MathUtils, Vector3, ACESFilmicToneMapping, SRGBColorSpace } from 'three';
import { useScrollStore } from '../../store/useScrollStore';
import Galaxy from '../Galaxy';
import ParticleMorph from './ParticleMorph';

function CameraRig() {
  const { camera, pointer } = useThree();
  const progress = useScrollStore((s) => s.progress);
  const velocity = useScrollStore((s) => s.velocity);
  
  // Define a camera path that moves deep into the scene on scroll and reacts to mouse
  useFrame(() => {
    // 1. Deep Space Flight (Scroll)
    // The camera starts at z=6 and flies deep (z=-20) as progress goes 0 -> 1
    const targetZ = 6 - progress * 26; 
    const targetYScroll = -progress * 2;
    
    // 2. Cursor Parallax (Pointer)
    // Add subtle panning based on mouse pointer (-1 to 1)
    const pointerX = pointer.x * 0.5;
    const pointerY = pointer.y * 0.5;
    
    // Smoothly interpolate position
    camera.position.z = MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.x = MathUtils.lerp(camera.position.x, pointerX, 0.05);
    camera.position.y = MathUtils.lerp(camera.position.y, targetYScroll + pointerY, 0.05);
    
    // Look ahead into the depth, slightly offset by pointer
    const targetLookAt = new Vector3(pointerX * 0.2, targetYScroll + pointerY * 0.2, targetZ - 5);
    
    const currentLook = new Vector3();
    camera.getWorldDirection(currentLook);
    
    camera.lookAt(targetLookAt);

    // 3. Velocity Warp (FOV adjustment based on scroll speed)
    // clamp velocity to max 100 for safety, map it to FOV bump
    const clampedVelocity = Math.min(Math.abs(velocity), 100);
    const targetFov = 45 + (clampedVelocity * 0.2); // max 65 FOV
    // @ts-ignore
    camera.fov = MathUtils.lerp(camera.fov, targetFov, 0.1);
    camera.updateProjectionMatrix();
  });
  
  return null;
}

// FloatingShapes removed in favor of ParticleMorph

export default function Scene3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#000000]">
      <div className="absolute inset-0 z-0">
        <Galaxy 
          mouseRepulsion={!isMobile}
          mouseInteraction={!isMobile}
          density={isMobile ? 0.05 : 0.2}
          twinkleIntensity={0}
          repulsionStrength={0.6}
          starSpeed={0.4}
          saturation={0}
          glowIntensity={0.6}
          hueShift={0}
          rotationSpeed={0.03}
          autoCenterRepulsion={0}
          speed={0.3}
          transparent={false}
        />
      </div>
      
      {!isMobile && (
        <Canvas
          className="absolute inset-0 z-10"
          camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 6] }}
          gl={{
            antialias: false,
            toneMapping: ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
            outputColorSpace: SRGBColorSpace,
            powerPreference: 'high-performance',
            alpha: true
          }}
          dpr={[1, 1.5]}
        >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />

          <ParticleMorph />
          <CameraRig />

          <EffectComposer multisampling={0}>
            <Bloom
              luminanceThreshold={0.8}
              luminanceSmoothing={0.9}
              intensity={1.0}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
}
