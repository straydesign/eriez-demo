"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import ProceduralGear from "./ProceduralGear";

export default function IndustrialModel() {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!groupRef.current) return;
    const offset = scroll.offset; // 0 to 1

    // Scroll-driven transforms per section table
    // Hero 0-20%: centered, slow rotation
    // Stats 20-40%: shift right, profile view
    // Showcase 40-65%: dramatic rotation, orange glow
    // Industries 65-82%: small, background
    // CTA 82-100%: settle into idle

    let x = 0;
    let y = 0;
    let z = 0;
    let rotY = 0;
    let rotX = 0;
    let scale = 1;

    if (offset < 0.2) {
      // Hero: centered
      const t = offset / 0.2;
      x = 0;
      y = 0;
      scale = 1.8 + t * 0.2;
      rotY = t * 0.5;
    } else if (offset < 0.4) {
      // Stats: shift right, profile
      const t = (offset - 0.2) / 0.2;
      x = THREE.MathUtils.lerp(0, 3, t);
      y = THREE.MathUtils.lerp(0, -0.5, t);
      scale = THREE.MathUtils.lerp(2, 1.6, t);
      rotY = 0.5 + t * 1.5;
      rotX = t * 0.3;
    } else if (offset < 0.65) {
      // Showcase: dramatic rotation, shift left
      const t = (offset - 0.4) / 0.25;
      x = THREE.MathUtils.lerp(3, -2.5, t);
      y = THREE.MathUtils.lerp(-0.5, 0, t);
      scale = THREE.MathUtils.lerp(1.6, 2.2, t);
      rotY = 2.0 + t * 2.5;
      rotX = THREE.MathUtils.lerp(0.3, -0.2, t);
    } else if (offset < 0.82) {
      // Industries: small in background
      const t = (offset - 0.65) / 0.17;
      x = THREE.MathUtils.lerp(-2.5, 0, t);
      y = THREE.MathUtils.lerp(0, 1.5, t);
      scale = THREE.MathUtils.lerp(2.2, 0.8, t);
      rotY = 4.5 + t * 1.0;
      rotX = THREE.MathUtils.lerp(-0.2, 0, t);
    } else {
      // CTA: settle center
      const t = (offset - 0.82) / 0.18;
      x = THREE.MathUtils.lerp(0, 0, t);
      y = THREE.MathUtils.lerp(1.5, 0, t);
      scale = THREE.MathUtils.lerp(0.8, 1.5, t);
      rotY = 5.5 + t * 0.5;
    }

    groupRef.current.position.set(x, y, z);
    groupRef.current.rotation.set(rotX, rotY, 0);
    groupRef.current.scale.setScalar(scale);
  });

  return (
    <group ref={groupRef}>
      <ProceduralGear />
    </group>
  );
}
