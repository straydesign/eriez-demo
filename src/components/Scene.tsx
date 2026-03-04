"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import IndustrialModel from "./IndustrialModel";
import ParticleField from "./ParticleField";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import ShowcaseSection from "./ShowcaseSection";
import IndustriesSection from "./IndustriesSection";
import CTASection from "./CTASection";
import ImmersiveNav from "./ImmersiveNav";
import LoadingScreen from "./LoadingScreen";

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, 2, -3]} intensity={0.5} color="#E87722" />
      <pointLight position={[3, -2, 3]} intensity={0.3} color="#004a99" />
    </>
  );
}

function SceneContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <ScrollControls pages={5} damping={0.25}>
      {/* 3D layer */}
      <SceneLighting />
      <IndustrialModel />
      <ParticleField count={isMobile ? 50 : 200} />
      <Environment preset="city" />

      {/* DOM overlay layer */}
      <Scroll html style={{ width: "100%" }}>
        <HeroSection />
        <StatsSection />
        <ShowcaseSection />
        <IndustriesSection />
        <CTASection />
      </Scroll>
    </ScrollControls>
  );
}

export default function Scene() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <LoadingScreen loaded={loaded} />
      <ImmersiveNav />
      <div className="canvas-container">
        <Canvas
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          camera={{ position: [0, 0, 6], fov: 50 }}
          onCreated={() => {
            setTimeout(() => setLoaded(true), 800);
          }}
          fallback={
            <div className="w-full h-full bg-gradient-to-b from-[#0a0a1a] to-[#0a0a0f]" />
          }
        >
          <Suspense fallback={null}>
            <SceneContent />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
