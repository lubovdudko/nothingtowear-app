import styled from "styled-components";

export const OutfitGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 3fr 20%;
`;

export const OutfitGridCanvas = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 3fr;
  grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-column: 2 / 3;
  max-height: 70vh;
`;

export const OutfitGridTopSectionWrapper = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 6;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
`;

export const OutfitGridBottomSectionWrapper = styled.div`
  grid-column: 2 / 5;
  grid-row: 5 / 9;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
`;

export const OutfitGridBagsSectionWrapper = styled.div`
  grid-column: 5 /6;
  grid-row: 4 / 6;
  display: flex;
  justify-content: flex-start;
`;

export const OutfitGridAccessoriesSectionWrapper = styled.div`
  grid-column: 2 / 5;
  grid-row: 1 / 2;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
export const OutfitGridShoesSectionWrapper = styled.div`
  grid-column: 2 / 5;
  grid-row: 9 / 10;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const OutfitGridOuterwearSectionWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 7;
  display: flex;
  justify-content: flex-end;
`;
