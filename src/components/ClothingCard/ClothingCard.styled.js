import styled from "styled-components";

export const ClothingCardWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  max-width: 400px;
  max-height: 600px;
  text-align: center;
  display: block;
`;

export const ColorIndicator = styled.span`
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: inline-block;
  margin-left: 5px;
  ${(props) =>
    props.color === "white"
      ? "border: 1px solid grey;"
      : `background-color: ${props.color};`}
`;

export const SwitchedButton = styled.button`
  font-family: "Playfair Display", serif;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  min-height: 30px;
  font-size: 14px;
  cursor: pointer;

  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover,
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  ${({ $isAdded }) => `
    background-color: ${
      $isAdded ? "rgba(108, 68, 68, 0.7)" : "rgba(237, 200, 200, 0.7)"
    };
    color: ${$isAdded ? "#fafafa" : "#111"};
  `}
`;
