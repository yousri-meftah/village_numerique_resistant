import { motion } from "framer-motion";
import { useState } from "react";

export const VillageGuide = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const messages = [
    "Bienvenue au Village Numérique Résistant ! 🏡",
    "Cliquez sur les bâtiments pour découvrir les solutions NIRD.",
    "Chaque lieu cache des secrets pour un numérique plus libre !",
  ];

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-30 max-w-xs"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Character */}
      <motion.button
        className="relative"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-building overflow-hidden">
          <span className="text-4xl">🧙</span>
        </div>
        
        {/* Notification dot */}
        {!isExpanded && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        )}
      </motion.button>

      {/* Speech bubble */}
      {isExpanded && (
        <motion.div
          className="absolute bottom-full left-0 mb-4 bg-card rounded-village p-4 shadow-float min-w-[280px]"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
        >
          <div className="space-y-2">
            {messages.map((msg, i) => (
              <motion.p
                key={i}
                className="text-sm text-foreground leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                {msg}
              </motion.p>
            ))}
          </div>

          {/* Pointer */}
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card rotate-45" />

          {/* Close hint */}
          <p className="text-xs text-muted-foreground mt-3 italic">
            Cliquez sur le guide pour fermer
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};
