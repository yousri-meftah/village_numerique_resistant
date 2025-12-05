import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface BuildingData {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  color: string;
  position: { x: number; y: number };
  size: "small" | "medium" | "large";
  details: {
    title: string;
    content: string;
    actions: string[];
  };
}

interface VillageBuildingProps {
  building: BuildingData;
  onSelect: (building: BuildingData) => void;
  isSelected: boolean;
}

export const VillageBuilding = ({ building, onSelect, isSelected }: VillageBuildingProps) => {
  const sizeClasses = {
    small: "w-24 h-28 md:w-28 md:h-32",
    medium: "w-32 h-36 md:w-36 md:h-40",
    large: "w-40 h-44 md:w-44 md:h-48",
  };

  const floatRange = building.size === "large" ? 6 : 8;
  const floatDuration = building.size === "large" ? 5.5 : 6.5;

  return (
    <motion.button
      className={`absolute ${sizeClasses[building.size]} cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/60 rounded-2xl`}
      style={{
        left: `${building.position.x}%`,
        top: `${building.position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      onClick={() => onSelect(building)}
      whileHover={{ scale: 1.08, y: -10, rotate: -1.5 }}
      whileTap={{ scale: 0.98 }}
      animate={{ 
        y: [0, -floatRange, 0],
        rotate: [0, 0.6, 0],
      }}
      transition={{ 
        duration: floatDuration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: Math.random() * 0.6,
      }}
    >
      {/* Clickable aura to hint interactivity */}
      <motion.div
        className="absolute -inset-3 rounded-[22px] bg-accent/10 blur-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-700"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      {/* Retro pedestal to separate each house from the ground */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[130%] h-6 bg-black/30 rounded-full blur-md opacity-50" />
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[120%] h-4 bg-gradient-to-r from-black/30 via-white/10 to-black/30 rounded-full pixel-border" />

      {/* Building Base */}
      <div
        className={`relative w-full h-full rounded-xl shadow-building transition-shadow duration-500 group-hover:shadow-building-hover pixel-border overflow-hidden ${building.color}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />

        {/* Roof */}
        {/* <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[115%]">
          <svg viewBox="0 0 100 32" className="w-full drop-shadow-md">
            <path
              d="M4 30 L50 6 L96 30 Z"
              className="fill-village-roof"
            />
            <path
              d="M50 6 L50 0 L56 6 Z"
              className="fill-village-wood"
            />
          </svg>
        </div> */}

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center pt-5">
          <div className="text-4xl md:text-5xl drop-shadow-[0_6px_8px_rgba(0,0,0,0.35)]">
            {building.icon}
          </div>
        </div>

        {/* Window glow effect */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-10 rounded-t-full bg-village-gold/60"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Halo pulse to indicate clickability */}
        <motion.div
          className="absolute -inset-[6px] rounded-[18px] border border-white/15"
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Smoke effect for some buildings */}
        {building.size === "large" && (
          <div className="absolute -top-8 right-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-muted/60"
                animate={{
                  y: [-10, -40],
                  x: [0, 10],
                  opacity: [0.6, 0],
                  scale: [1, 2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Tooltip on hover */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-card rounded-lg shadow-float whitespace-nowrap pointer-events-none z-10"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        animate={isSelected ? { opacity: 1, y: 0 } : {}}
      >
        <p className="font-display font-semibold text-foreground text-sm">
          {building.name}
        </p>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-card" />
      </motion.div>

      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          className="absolute inset-0 rounded-village border-4 border-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          layoutId="selection"
        />
      )}
    </motion.button>
  );
};
