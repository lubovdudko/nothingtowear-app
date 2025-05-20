import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 4px solid rgba(200, 200, 200, 0.4);
  border-top-color: #aaa;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export const SpinnerOverlay = styled.div`
  max-width: 100%;
  height: 70vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  ${({ $visible }) =>
    !$visible &&
    css`
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    `}
`;
