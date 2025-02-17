// components/ParticlesBackground.tsx

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
      options={{
        particles: {
          number: { value: 60 },
          color: { value: "#fcd34d" },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: 3 },
          move: { enable: true, speed: 1.5 },
        },
      }}
    />
  );
}
