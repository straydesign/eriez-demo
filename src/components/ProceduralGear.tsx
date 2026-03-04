"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function GearTooth({ angle, radius }: { angle: number; radius: number }) {
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  return (
    <mesh position={[x, 0, z]} rotation={[0, -angle, 0]}>
      <boxGeometry args={[0.18, 0.3, 0.35]} />
      <meshStandardMaterial color="#4a4a5a" metalness={0.85} roughness={0.25} />
    </mesh>
  );
}

export default function ProceduralGear() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);

  const toothAngles = useMemo(() => {
    const count = 16;
    return Array.from({ length: count }, (_, i) => (i / count) * Math.PI * 2);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y -= delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main gear body */}
      <mesh>
        <torusGeometry args={[1.2, 0.15, 16, 48]} />
        <meshStandardMaterial
          color="#3a3a4a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Gear teeth */}
      {toothAngles.map((angle, i) => (
        <GearTooth key={i} angle={angle} radius={1.35} />
      ))}

      {/* Inner ring - counter-rotates */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[0.7, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#E87722"
          metalness={0.7}
          roughness={0.3}
          emissive="#E87722"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Center hub */}
      <mesh>
        <cylinderGeometry args={[0.35, 0.35, 0.4, 24]} />
        <meshStandardMaterial
          color="#2a2a3a"
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>

      {/* Hub spokes */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <mesh
            key={`spoke-${i}`}
            position={[Math.cos(angle) * 0.5, 0, Math.sin(angle) * 0.5]}
            rotation={[Math.PI / 2, 0, -angle]}
          >
            <cylinderGeometry args={[0.04, 0.04, 0.7, 8]} />
            <meshStandardMaterial
              color="#3a3a4a"
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        );
      })}

      {/* Orbiting accent sphere */}
      <mesh position={[1.8, 0.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#E87722"
          emissive="#E87722"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}
