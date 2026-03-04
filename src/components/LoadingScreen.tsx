"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  loaded: boolean;
}

export default function LoadingScreen({ loaded }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setVisible(false), 900);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${loaded ? "fade-out" : ""}`}>
      <div className="loading-pulse">
        <div className="w-16 h-16 bg-orange rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-2xl">E</span>
        </div>
      </div>
      <p className="mt-6 text-gray-500 text-sm tracking-widest uppercase">
        Loading Experience
      </p>
    </div>
  );
}
