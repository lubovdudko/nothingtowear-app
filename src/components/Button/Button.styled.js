import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const baseButtonStyles = css`
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  max-height: 35px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-family: "Playfair Display", serif;
  text-align: center;
  font-weight: 600;

  &:hover,
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }
`;

const variantButtonStyles = {
  primary: css`
    background-color: #d8a8a8;
  `,
  secondary: css`
    background-color: #f1f1f1;
    color: #111;
  `,
};

export const BaseButton = styled.button`
  ${baseButtonStyles}
  ${({ $variant }) =>
    variantButtonStyles[$variant] || variantButtonStyles.primary}
`;

export const NavButton = styled(NavLink)`
  ${baseButtonStyles}
  ${({ $variant }) =>
    variantButtonStyles[$variant] || variantButtonStyles.primary}
`;
