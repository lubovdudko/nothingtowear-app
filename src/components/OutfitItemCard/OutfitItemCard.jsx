import { removeWhiteBackgroundAndCrop } from "../../utils/removeWhiteBackground";
import { useState, useEffect, useRef } from "react";
import { OutfitItemCardWrapper, GhostButton } from "./OutfitItemCard.styled";
import { ClothingImage } from "../Image/Image";

function OutfitItemCard({ variant = "default", ...props }) {
  const [cleanImage, setCleanImage] = useState(null);
  const hasReportedLoad = useRef(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        const processedImg = await removeWhiteBackgroundAndCrop(props.imgURL);
        setCleanImage(processedImg);
      } catch (err) {
        console.error("Error while background removing:", err);
        setCleanImage(props.imgURL);
      } finally {
        if (!hasReportedLoad.current && props.onLoad) {
          hasReportedLoad.current = true;
          props.onLoad();
        }
      }
    };
    hasReportedLoad.current = false;
    processImage();
  }, [props.imgURL]);

  return (
    <OutfitItemCardWrapper data-component="OutfitItemCardWrapper">
      <ClothingImage
        type={props.type}
        src={props.useTransparent ? cleanImage : props.imgURL}
        alt={props.name}
      />
      {variant !== "mini" && (
        <GhostButton onClick={props.onRemoveOutfit}>X</GhostButton>
      )}
    </OutfitItemCardWrapper>
  );
}

export default OutfitItemCard;
