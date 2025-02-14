import "./backgroundStars.css";
import { useEffect, useMemo, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

const ParticlesBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const loadParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadStarsPreset(engine);
      });
    };

    if (!particlesRef.current) {
      loadParticles();
      particlesRef.current = true;
    }
  }, []);

  const options = useMemo(
    () => ({
      preset: "stars",
      backgroundMode: {
        enable: true,
        zIndex: 1,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 350,
          density: {
            enable: true,
            value_area: 700,
          },
        },
        color: {
          value: "#ffdd9d",
        },
        size: {
          min: 0.8,
          max: 1.6,
          random: true,
        },
        move: {
          enable: true,
          speed: 4,
          direction: "bottom-left",
          straight: true,
          out_mode: "out",
        },
      },
      retina_detect: true,
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
};

const ParticlesComponent = () => {
  return (
    <div>
      <ParticlesBackground />
    </div>
  );
};

export default ParticlesComponent;
