import styled from "styled-components";

export const OutfitItemCardWrapper = styled.div`
  position: relative;

  &:hover button {
    opacity: 1;
  }
`;

export const GhostButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
`;
