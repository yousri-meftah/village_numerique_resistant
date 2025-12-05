import { useState } from "react";
import { VillageScene } from "@/components/village/VillageScene";
import { VillageBuilding, BuildingData } from "@/components/village/VillageBuilding";
import { BuildingDetail } from "@/components/village/BuildingDetail";
import { VillageGuide } from "@/components/village/VillageGuide";
import { VillageHeader } from "@/components/village/VillageHeader";
import { villageBuildings } from "@/data/villageBuildings";
import { Helmet } from "react-helmet";

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingData | null>(null);

  const handleSelectBuilding = (building: BuildingData) => {
    setSelectedBuilding(building);
  };

  const handleCloseDetail = () => {
    setSelectedBuilding(null);
  };

  return (
    <>
      <Helmet>
        <title>Village Numérique Résistant | NIRD</title>
        <meta 
          name="description" 
          content="Explorez le Village Numérique Résistant et découvrez les solutions pour un numérique inclusif, responsable et durable. Logiciels libres, souveraineté des données, éducation numérique." 
        />
      </Helmet>

      <main className="relative min-h-screen overflow-hidden">
        <VillageHeader />
        
        <VillageScene>
          {/* Buildings container - positioned in the grass area */}
          <div className="absolute bottom-0 left-0 w-full h-[55%]">
            {villageBuildings.map((building) => (
              <VillageBuilding
                key={building.id}
                building={building}
                onSelect={handleSelectBuilding}
                isSelected={selectedBuilding?.id === building.id}
              />
            ))}
          </div>
        </VillageScene>

        <VillageGuide />
        
        <BuildingDetail 
          building={selectedBuilding} 
          onClose={handleCloseDetail} 
        />
      </main>
    </>
  );
};

export default Index;
