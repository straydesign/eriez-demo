"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";
import ProceduralGear from "./ProceduralGear";

export default function IndustrialModel() {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();
  const [explode, setExplode] = useState(0);

  useFrame(() => {
    if (!groupRef.current) return;
    const offset = scroll.offset; // 0 to 1

    // Scroll-driven transforms + explode
    // Hero 0–20%: assembled, centered
    // Stats 20–40%: starts coming apart, shifts right
    // Showcase 40–65%: fully exploded, dramatic spread
    // Industries 65–82%: reassembling, pulls back
    // CTA 82–100%: fully assembled, settled

    let x = 0;
    let y = 0;
    let rotY = 0;
    let rotX = 0;
    let scale = 1;
    let exp = 0;

    if (offset < 0.2) {
      // Hero: centered, assembled
      const t = offset / 0.2;
      scale = 1.8 + t * 0.2;
      rotY = t * 0.5;
      exp = 0;
    } else if (offset < 0.4) {
      // Stats: shift right, start exploding
      const t = (offset - 0.2) / 0.2;
      x = THREE.MathUtils.lerp(0, 3, t);
      y = THREE.MathUtils.lerp(0, -0.3, t);
      scale = THREE.MathUtils.lerp(2, 1.8, t);
      rotY = 0.5 + t * 1.5;
      rotX = t * 0.2;
      exp = THREE.MathUtils.lerp(0, 0.6, t);
    } else if (offset < 0.65) {
      // Showcase: fully exploded, shift left
      const t = (offset - 0.4) / 0.25;
      x = THREE.MathUtils.lerp(3, -2, t);
      y = THREE.MathUtils.lerp(-0.3, 0.2, t);
      scale = THREE.MathUtils.lerp(1.8, 2.2, t);
      rotY = 2.0 + t * 2.0;
      rotX = THREE.MathUtils.lerp(0.2, -0.15, t);
      exp = THREE.MathUtils.lerp(0.6, 1.0, Math.min(t * 2, 1));
    } else if (offset < 0.82) {
      // Industries: reassembling
      const t = (offset - 0.65) / 0.17;
      x = THREE.MathUtils.lerp(-2, 0, t);
      y = THREE.MathUtils.lerp(0.2, 1, t);
      scale = THREE.MathUtils.lerp(2.2, 1.0, t);
      rotY = 4.0 + t * 1.0;
      rotX = THREE.MathUtils.lerp(-0.15, 0, t);
      exp = THREE.MathUtils.lerp(1.0, 0, t);
    } else {
      // CTA: assembled, settled center
      const t = (offset - 0.82) / 0.18;
      y = THREE.MathUtils.lerp(1, 0, t);
      scale = THREE.MathUtils.lerp(1.0, 1.6, t);
      rotY = 5.0 + t * 0.5;
      exp = 0;
    }

    groupRef.current.position.set(x, y, 0);
    groupRef.current.rotation.set(rotX, rotY, 0);
    groupRef.current.scale.setScalar(scale);
    setExplode(exp);
  });

  return (
    <group ref={groupRef}>
      <ProceduralGear explode={explode} />
    </group>
  );
}
