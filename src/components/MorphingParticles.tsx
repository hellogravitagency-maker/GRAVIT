import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const particleVert = `
  uniform float uTime;
  uniform float uSize;
  attribute vec3 targetPosition;
  
  void main() {
    float morph = (sin(uTime * 0.8) + 1.0) * 0.5; // 0 to 1 smooth morphing
    
    // Add some noise or organic movement
    vec3 pos = mix(position, targetPosition, smoothstep(0.2, 0.8, morph));
    
    // Simple rotation
    float c = cos(uTime * 0.2);
    float s = sin(uTime * 0.2);
    mat2 rot = mat2(c, s, -s, c);
    pos.xz = rot * pos.xz;
    pos.xy = rot * pos.xy;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Point size depends on z-depth
    gl_PointSize = uSize * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFrag = `
  uniform vec3 uColor;

  void main() {
    // Solid circular particle (no glow, flat color)
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    // Slight inner gradient for a non-glowing 3D dot feel
    float alpha = smoothstep(0.5, 0.45, dist);
    
    gl_FragColor = vec4(uColor, alpha);
  }
`;

function ParticleMesh({ count = 2000 }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, targets] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const tgt = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Shape 1: Sphere surface
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 1.2;
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      // Shape 2: Cube
      tgt[i * 3] = (Math.random() - 0.5) * 2.0;
      tgt[i * 3 + 1] = (Math.random() - 0.5) * 2.0;
      tgt[i * 3 + 2] = (Math.random() - 0.5) * 2.0;
    }
    return [pos, tgt];
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uSize: { value: 60.0 }, // Adjust size based on container
    uColor: { value: new THREE.Color('#ff6a39') }, // Matching project vibe (orange)
  }), []);

  useFrame(({ clock }) => {
    if (ref.current) {
      (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
      ref.current.rotation.y = clock.getElapsedTime() * 0.1;
      ref.current.rotation.x = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-targetPosition" args={[targets, 3]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={particleVert}
        fragmentShader={particleFrag}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </points>
  );
}

export default function MorphingParticles({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ParticleMesh />
      </Canvas>
    </div>
  );
}
