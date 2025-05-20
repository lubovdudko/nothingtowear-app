import { StyledOutfitImage } from "./Image.styled";

export function ClothingImage({ type, ...rest }) {
  if (type) {
    return <StyledOutfitImage $type={type} {...rest} />;
  }
  return <StyledOutfitImage $type="base" {...rest} />;
}
