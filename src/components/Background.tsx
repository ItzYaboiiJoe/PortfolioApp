"use client";

import GhostFibers from "@/components/GhostFibers";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen">
      <GhostFibers
        lineColor="#0b1739"
        glowColor="#2563eb"
        speed={0.12}
        scale={2}
        rotation={0}
        rotationSpeed={0.1}
        layers={3}
        waveAmplitude={0.015}
        waveFrequency={3}
        waveSpeed={0.1}
        layerSpeed={0.05}
        twist={0.08}
        twistFrequency={5}
        twistSpeed={0.6}
        lineFrequency={5}
        lineSpacing={2}
        lineSharpness={16}
        glowFalloff={12}
        glowIntensity={1.1}
        brightness={1.4}
        blueBoost={1.3}
        vignette={0.9}
        grain={0.025}
        lightMode={false}
        dpr={1}
        fps={60}
        paused={false}
      />
    </div>
  );
};

export default Background;
