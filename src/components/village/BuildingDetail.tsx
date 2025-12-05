import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";
import { BuildingData } from "./VillageBuilding";
import { Button } from "@/components/ui/button";

interface BuildingDetailProps {
  building: BuildingData | null;
  onClose: () => void;
}

export const BuildingDetail = ({ building, onClose }: BuildingDetailProps) => {
  return (
    <AnimatePresence>
      {building && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-lg bg-card shadow-2xl z-50 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header with gradient */}
            <div className={`relative h-48 ${building.color} overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-card/80 hover:bg-card transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="absolute bottom-4 left-6 text-6xl">
                {building.icon}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  {building.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {building.description}
                </p>
              </div>

              {/* Detail section */}
              <motion.div
                className="bg-muted rounded-village p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-accent" />
                  <h3 className="font-display font-semibold">
                    {building.details.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {building.details.content}
                </p>
              </motion.div>

              {/* Actions */}
              <div>
                <h4 className="font-display font-semibold mb-3 text-foreground">
                  Actions concrètes
                </h4>
                <ul className="space-y-3">
                  {building.details.actions.map((action, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{action}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {/* <Button className="w-full group" size="lg">
                  Explorer ce lieu
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
