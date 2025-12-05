import { motion } from "framer-motion";
import { ReactNode } from "react";

interface VillageSceneProps {
  children: ReactNode;
}

export const VillageScene = ({ children }: VillageSceneProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden cursor-explore bg-background">
      {/* Sky gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "var(--gradient-sunset)",
        }}
      />
      <div className="absolute inset-0 retro-scanlines opacity-40" />
      <div className="absolute inset-0 retro-noise" />

      {/* Clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/50 rounded-full"
            style={{
              width: `${120 + i * 30}px`,
              height: `${40 + i * 10}px`,
              top: `${6 + i * 7}%`,
              left: `${-20 + i * 28}%`,
              filter: "blur(1px)",
            }}
            animate={{
              x: ["0%", "130%"],
            }}
            transition={{
              duration: 70 + i * 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 6,
            }}
          />
        ))}
      </div>

      {/* Sun */}
      <motion.div
        className="absolute top-10 right-12 w-24 h-24 md:w-32 md:h-32"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-village-gold shadow-[0_0_70px_25px_hsl(var(--village-gold)/0.4)] pixel-border" />
      </motion.div>

      {/* Stylised hills */}
      <svg 
        className="absolute bottom-[32%] left-0 w-full h-48 md:h-64 opacity-90"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="hsl(142 22% 38%)"
          fillOpacity="0.55"
          d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,165.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
        <path
          fill="hsl(142 28% 32%)"
          fillOpacity="0.65"
          d="M0,240L120,240C240,240,480,240,720,208C960,176,1200,112,1320,80L1440,48L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        />
      </svg>

      {/* Ground/Grass area */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[48%]"
        style={{
          background: "var(--gradient-ground)",
        }}
      >
        <div className="absolute inset-0 retro-grid opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Path through village */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M -5 78 Q 16 72, 32 56 Q 48 40, 63 46 Q 78 52, 104 36"
            fill="none"
            stroke="hsl(38 92% 62% / 0.65)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="6 8"
            className="drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]"
          />
        </svg>
      </div>

      {/* Village content */}
      <div className="absolute inset-0">
        {children}
      </div>

      {/* Birds */}
      {/* <motion.div
        className="absolute top-16 left-1/4 text-lg"
        animate={{
          x: [0, 120, 240],
          y: [0, -18, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        🕊️
      </motion.div> */}
    </div>
  );
};
