import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export const EmptyStateWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease;
`;

export const EmptyStateMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
