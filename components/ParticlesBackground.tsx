// components/ParticlesBackground.tsx
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // This loads the tsparticles package
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
        background: {
          // If you'd like a background here, remove it
          // because we have .bg-animated-gradient behind
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: ["#FFD700", "#FCD34D", "#EAB308"]
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 1.5,
          },
          line_linked: {
            enable: false, // If you want connecting lines, set to true
          },
        },
      }}
    />
  );
}
