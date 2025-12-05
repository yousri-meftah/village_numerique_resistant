import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const VillageHeader = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-20 p-4 md:p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo / Title */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-12 h-12 md:w-14 md:h-14 bg-card rounded-village shadow-float flex items-center justify-center">
            <span className="text-2xl md:text-3xl">🏘️</span>
          </div>
          <div>
            <h1 className="font-display text-lg md:text-xl font-bold text-foreground drop-shadow-sm">
              Village Numérique
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">
              Résistant
            </p>
          </div>
        </motion.div>

        {/* NIRD Badge */}
        <motion.div
          className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-float"
          whileHover={{ scale: 1.05 }}
          animate={{
            boxShadow: [
              "0 4px 16px -4px hsl(var(--accent) / 0.2)",
              "0 4px 24px -4px hsl(var(--accent) / 0.4)",
              "0 4px 16px -4px hsl(var(--accent) / 0.2)",
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="font-display font-semibold text-sm text-foreground">
            NIRD
          </span>
        </motion.div>
      </div>
    </motion.header>
  );
};
