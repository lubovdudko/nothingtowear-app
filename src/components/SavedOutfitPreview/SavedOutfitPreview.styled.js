import styled from "styled-components";

export const ScaledOutfitPreview = styled.div`
  transform: scale(${({ $scale }) => $scale || 0.6});
  transform-origin: top center;
  width: max-content;
  height: fit-content;
  max-height: 70%;
`;
