import OutfitItemCard from "../OutfitItemCard/OutfitItemCard";
import {
  OutfitGridWrapper,
  OutfitGridCanvas,
  OutfitGridTopSectionWrapper,
  OutfitGridBottomSectionWrapper,
  OutfitGridBagsSectionWrapper,
  OutfitGridAccessoriesSectionWrapper,
  OutfitGridShoesSectionWrapper,
  OutfitGridOuterwearSectionWrapper,
} from "./OutfitGrid.styled";

function OutfitGrid({
  outfitItems,
  useTransparent,
  isEditable,
  onRemoveOutfit,
  onLoad,
  allImagesLoaded,
  variant,
}) {
  const outerwear = outfitItems.filter((item) => item.type === "outerwear");
  const tops = outfitItems.filter((item) => item.type === "top");
  const bottoms = outfitItems.filter((item) => item.type === "bottom");
  const shoes = outfitItems.filter((item) => item.type === "shoes");
  const accessories = outfitItems.filter((item) => item.type === "accessories");
  const bags = outfitItems.filter((item) => item.type === "bag");

  const commonCardProps = {
    useTransparent,
    onLoad,
    variant,
  };

  return (
    <OutfitGridWrapper data-component="OutfitGridWrapper">
      <OutfitGridCanvas style={{ opacity: allImagesLoaded ? 1 : 0 }}>
        <OutfitGridOuterwearSectionWrapper>
          {outerwear.map((item) => (
            <OutfitItemCard
              key={`${item.id}_${outfitItems.length}`}
              imgURL={item.imgURL}
              type={item.type}
              {...commonCardProps}
              {...(isEditable
                ? { onRemoveOutfit: () => onRemoveOutfit(item.id) }
                : {})}
            />
          ))}
        </OutfitGridOuterwearSectionWrapper>
        <OutfitGridAccessoriesSectionWrapper>
          {accessories.map((item) => (
            <OutfitItemCard
              key={`${item.id}_${outfitItems.length}`}
              imgURL={item.imgURL}
              type={item.type}
              {...commonCardProps}
              {...(isEditable
                ? { onRemoveOutfit: () => onRemoveOutfit(item.id) }
                : {})}
            />
          ))}
        </OutfitGridAccessoriesSectionWrapper>
        <OutfitGridTopSectionWrapper>
          {tops.map((item) => (
            <OutfitItemCard
              key={`${item.id}_${outfitItems.length}`}
              imgURL={item.imgURL}
              type={item.type}
              {...commonCardProps}
              {...(isEditable
                ? { onRemoveOutfit: () => onRemoveOutfit(item.id) }
                : {})}
            />
          ))}
        </OutfitGridTopSectionWrapper>
        <OutfitGridBottomSectionWrapper>
          {bottoms.map((item) => (
            <OutfitItemCard
              key={`${item.id}_${outfitItems.length}`}
              imgURL={item.imgURL}
              type={item.type}
              {...commonCardProps}
              {...(isEditable
                ? { onRemoveOutfit: () => onRemoveOutfit(item.id) }
                : {})}
            />
          ))}
        </OutfitGridBottomSectionWrapper>
        <OutfitGridShoesSectionWrapper>
          {shoes.map((item) => (
            <OutfitItemCard
              key={`${item.id}_${outfitItems.length}`}
              imgURL={item.imgURL}
              type={item.type}
              {...commonCardProps}
              {...(isEditable
                ? { onRemoveOutfit: () => onRemoveOutfit(item.id) }
                : {})}
            />
          ))}
        </OutfitGridShoesSectionWrapper>
        <OutfitGridBagsSectionWrapper>
          {bags.map((item) => (
            <OutfitItemCard
              key={`${item.id}_${outfitItems.length}`}
              imgURL={item.imgURL}
              type={item.type}
              {...commonCardProps}
              {...(isEditable
                ? { onRemoveOutfit: () => onRemoveOutfit(item.id) }
                : {})}
            />
          ))}
        </OutfitGridBagsSectionWrapper>
      </OutfitGridCanvas>
    </OutfitGridWrapper>
  );
}

export default OutfitGrid;
