import "./backgroundStars.css";
import { useEffect, useMemo, useState, useRef } from "react";
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
          speed: 0.2,
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

const StarAnimation = () => {
  const [currentStar, setCurrentStar] = useState(0);

  useEffect(() => {
    const triggerNextStar = () => {
      if (currentStar < 5) {
        setTimeout(() => {
          setCurrentStar((prev) => (prev === 4 ? 0 : prev + 1)); // Loop stars
        }, 4000);
      }
    };

    triggerNextStar();
  }, [currentStar]);

  return (
    <div className="night">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`star ${currentStar === index ? "animate" : ""}`}
        ></div>
      ))}
    </div>
  );
};

const ParticlesComponent = () => {
  return (
    <div>
      <ParticlesBackground />
      <StarAnimation />
    </div>
  );
};

export default ParticlesComponent;
