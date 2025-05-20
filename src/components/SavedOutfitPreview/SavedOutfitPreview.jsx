import { useState, useEffect } from "react";
import OutfitGrid from "../OutfitGrid/OutfitGrid";
import { ScaledOutfitPreview } from "./SavedOutfitPreview.styled";
import { Loader } from "../Spinner/Spinner";

function SavedOutfitPreview({ itemsOfOutfit, ...props }) {
  const [loadedCount, setLoadedCount] = useState(0);
  const totalCards = itemsOfOutfit.length;
  const hasCards = totalCards > 0;
  const allImagesLoaded = hasCards && loadedCount === totalCards;

  const handleCardLoaded = () => {
    setLoadedCount((prev) => {
      const next = prev + 1;
      return next;
    });
  };

  useEffect(() => {
    setLoadedCount(0);
  }, []);

  return (
    <ScaledOutfitPreview
      $scale={props.scale}
      data-component="ScaledOutfitPreview"
    >
      {hasCards && !allImagesLoaded && (
        <Loader visible={!allImagesLoaded}>
          {" "}
          style={{ maxWidth: "290px" }}
        </Loader>
      )}
      <OutfitGrid
        outfitItems={itemsOfOutfit}
        isEditable={false}
        useTransparent={true}
        onLoad={handleCardLoaded}
        allImagesLoaded={allImagesLoaded}
        variant="mini"
      />
    </ScaledOutfitPreview>
  );
}

export default SavedOutfitPreview;
