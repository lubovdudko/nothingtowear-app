import styled from "styled-components";

const outfitImageSizes = {
  base: {
    maxWidth: "200px",
    maxHeight: "300px",
  },
  outerwear: {
    maxWidth: "200px",
  },
  top: {
    maxWidth: "150px",
    maxHeight: "150px",
  },
  bottom: {
    maxWidth: "150px",
    maxHeight: "230px",
  },
  shoes: {
    maxWidth: "100px",
  },
  accessories: {
    maxWidth: "60px",
  },
  bags: {
    maxWidth: "170px",
  },
};

export const StyledOutfitImage = styled.img`
  max-width: ${({ $type }) => outfitImageSizes[$type]?.maxWidth || "200px"};
  max-height: ${({ $type }) => outfitImageSizes[$type]?.maxHeight || "auto"};
`;
