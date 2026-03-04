"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GearToothProps {
  angle: number;
  radius: number;
  explode: number;
  index: number;
}

function GearTooth({ angle, radius, explode, index }: GearToothProps) {
  const ref = useRef<THREE.Mesh>(null);
  const baseX = Math.cos(angle) * radius;
  const baseZ = Math.sin(angle) * radius;

  // Each tooth drifts radially outward + floats up/down based on index
  const driftRadius = 2.5;
  const floatY = ((index % 3) - 1) * 1.2;

  useFrame(() => {
    if (!ref.current) return;
    const e = explode;
    ref.current.position.set(
      baseX + Math.cos(angle) * driftRadius * e,
      floatY * e,
      baseZ + Math.sin(angle) * driftRadius * e
    );
    ref.current.rotation.set(
      e * index * 0.3,
      -angle + e * 0.5,
      e * 0.2
    );
  });

  return (
    <mesh ref={ref} position={[baseX, 0, baseZ]} rotation={[0, -angle, 0]}>
      <boxGeometry args={[0.18, 0.3, 0.35]} />
      <meshStandardMaterial color="#4a4a5a" metalness={0.85} roughness={0.25} />
    </mesh>
  );
}

interface ProceduralGearProps {
  explode?: number; // 0 = assembled, 1 = fully exploded
}

export default function ProceduralGear({ explode = 0 }: ProceduralGearProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const hubRef = useRef<THREE.Mesh>(null);
  const spokeRefs = useRef<(THREE.Mesh | null)[]>([]);
  const accentRef = useRef<THREE.Mesh>(null);

  const toothAngles = useMemo(() => {
    const count = 16;
    return Array.from({ length: count }, (_, i) => (i / count) * Math.PI * 2);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * THREE.MathUtils.lerp(0.15, 0.05, explode);
    }

    // Outer ring: floats up and scales
    if (outerRingRef.current) {
      outerRingRef.current.position.y = explode * 1.8;
      outerRingRef.current.rotation.x = explode * 0.4;
      outerRingRef.current.scale.setScalar(1 + explode * 0.15);
    }

    // Inner ring: drops down, counter-rotates faster when exploded
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y -= delta * THREE.MathUtils.lerp(0.3, 0.6, explode);
      innerRingRef.current.position.y = explode * -1.5;
      innerRingRef.current.position.x = explode * 0.8;
      innerRingRef.current.rotation.z = explode * -0.3;
    }

    // Hub: drifts slightly forward
    if (hubRef.current) {
      hubRef.current.position.z = explode * 1.2;
      hubRef.current.position.y = explode * -0.3;
      hubRef.current.rotation.x = explode * 0.5;
    }

    // Spokes: fan outward
    spokeRefs.current.forEach((spoke, i) => {
      if (!spoke) return;
      const angle = (i / 6) * Math.PI * 2;
      const drift = explode * 1.8;
      spoke.position.set(
        Math.cos(angle) * (0.5 + drift),
        explode * ((i % 2 === 0 ? 1 : -1) * 0.6),
        Math.sin(angle) * (0.5 + drift)
      );
      spoke.rotation.set(
        Math.PI / 2 + explode * 0.3 * (i % 2 === 0 ? 1 : -1),
        explode * 0.2,
        -angle
      );
    });

    // Accent sphere: flies out far
    if (accentRef.current) {
      accentRef.current.position.set(
        1.8 + explode * 2.5,
        0.3 + explode * 2.0,
        explode * -1.5
      );
      const pulse = Math.sin(Date.now() * 0.003) * 0.3 + 0.7;
      accentRef.current.scale.setScalar(1 + explode * pulse);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main gear body — outer ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[1.2, 0.15, 16, 48]} />
        <meshStandardMaterial
          color="#3a3a4a"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Gear teeth */}
      {toothAngles.map((angle, i) => (
        <GearTooth key={i} angle={angle} radius={1.35} explode={explode} index={i} />
      ))}

      {/* Inner ring - counter-rotates */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[0.7, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#E87722"
          metalness={0.7}
          roughness={0.3}
          emissive="#E87722"
          emissiveIntensity={THREE.MathUtils.lerp(0.15, 0.4, explode)}
        />
      </mesh>

      {/* Center hub */}
      <mesh ref={hubRef}>
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
            ref={(el) => { spokeRefs.current[i] = el; }}
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
      <mesh ref={accentRef} position={[1.8, 0.3, 0]}>
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
