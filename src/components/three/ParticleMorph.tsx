import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useScrollStore } from '../../store/useScrollStore';
const PARTICLE_COUNT = 1000;

const vertexShader = `
uniform float uProgress;
uniform float uTime;
attribute vec3 aPositionB;
attribute vec3 aPositionC;
attribute float aRandom;

varying vec3 vColor;

// Simplex noise function for subtle movement
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec3 pos = position;
  float noise = snoise(vec2(aRandom * 100.0, uTime * 0.5)) * 0.2;
  
  // Interpolation logic based on scroll progress (0.0 to 1.0)
  // We map 0.0 -> 0.3 (Shape A -> B)
  // We map 0.3 -> 0.7 (Shape B holds)
  // We map 0.7 -> 1.0 (Shape B -> C)
  
  float t1 = smoothstep(0.0, 0.4, uProgress);
  float t2 = smoothstep(0.6, 1.0, uProgress);
  
  vec3 mixedPos = mix(position, aPositionB, t1);
  mixedPos = mix(mixedPos, aPositionC, t2);
  
  // Add subtle floating noise
  mixedPos.x += noise;
  mixedPos.y += noise;
  mixedPos.z += noise;

  vec4 mvPosition = modelViewMatrix * vec4(mixedPos, 1.0);
  
  // Size attenuation
  gl_PointSize = (12.0 * aRandom) / -mvPosition.z; 
  gl_Position = projectionMatrix * mvPosition;
  
  // Color mixing
  vec3 colorA = vec3(0.43, 0.48, 1.0); // Blue
  vec3 colorB = vec3(1.0, 0.41, 0.22); // Orange/Red
  vec3 colorC = vec3(1.0, 1.0, 1.0);   // White
  
  vec3 mixedColor = mix(colorA, colorB, t1);
  vColor = mix(mixedColor, colorC, t2);
}
`;

const fragmentShader = `
varying vec3 vColor;

void main() {
  // Create a soft circle
  float d = distance(gl_PointCoord, vec2(0.5));
  if(d > 0.5) discard;
  
  // Soft edges
  float alpha = smoothstep(0.5, 0.1, d);
  
  gl_FragColor = vec4(vColor, alpha * 0.8);
}
`;

export default function ParticleMorph() {
  const shaderRef = useRef<THREE.ShaderMaterial>(null);
  const progress = useScrollStore((s) => s.progress);

  // Generate Particle Data
  const { positionsA, positionsB, positionsC, randoms } = useMemo(() => {
    const posA = new Float32Array(PARTICLE_COUNT * 3);
    const posB = new Float32Array(PARTICLE_COUNT * 3);
    const posC = new Float32Array(PARTICLE_COUNT * 3);
    const rands = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      rands[i] = Math.random() * 0.5 + 0.5; // Random size/noise factor

      // Shape A: Chaotic Scattered Nebula (Sphere)
      const radiusA = 12 * Math.cbrt(Math.random());
      const thetaA = Math.random() * 2 * Math.PI;
      const phiA = Math.acos(2 * Math.random() - 1);
      posA[i3] = radiusA * Math.sin(phiA) * Math.cos(thetaA);
      posA[i3 + 1] = radiusA * Math.sin(phiA) * Math.sin(thetaA);
      posA[i3 + 2] = radiusA * Math.cos(phiA);

      // Shape B: Structured Rigid Cube (Grid-like Matrix)
      // To make it look structured, we snap to a grid sometimes
      const gridSize = 8;
      if (Math.random() > 0.5) {
        // Snapped
        posB[i3] = (Math.floor(Math.random() * gridSize) - gridSize/2) * 1.5;
        posB[i3 + 1] = (Math.floor(Math.random() * gridSize) - gridSize/2) * 1.5;
        posB[i3 + 2] = (Math.floor(Math.random() * gridSize) - gridSize/2) * 1.5;
      } else {
        // Random inside cube
        posB[i3] = (Math.random() - 0.5) * 10;
        posB[i3 + 1] = (Math.random() - 0.5) * 10;
        posB[i3 + 2] = (Math.random() - 0.5) * 10;
      }

      // Shape C: Twisting Double Helix or Ring (Torus)
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const R = 6; // major radius
      const r = 2; // minor radius
      posC[i3] = (R + r * Math.cos(v)) * Math.cos(u);
      posC[i3 + 1] = (R + r * Math.cos(v)) * Math.sin(u) + Math.sin(u * 2) * 2; // Add twist
      posC[i3 + 2] = r * Math.sin(v);
    }

    return { positionsA: posA, positionsB: posB, positionsC: posC, randoms: rands };
  }, []);

  useFrame((state) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Map progress directly (our Scene3D CameraRig also uses progress)
      // The morph shader handles the actual shape transitions based on this 0-1 value
      shaderRef.current.uniforms.uProgress.value = progress;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positionsA} itemSize={3} />
        <bufferAttribute attach="attributes-aPositionB" count={PARTICLE_COUNT} array={positionsB} itemSize={3} />
        <bufferAttribute attach="attributes-aPositionC" count={PARTICLE_COUNT} array={positionsC} itemSize={3} />
        <bufferAttribute attach="attributes-aRandom" count={PARTICLE_COUNT} array={randoms} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: { value: 0 },
          uProgress: { value: 0 },
        }}
      />
    </points>
  );
}
