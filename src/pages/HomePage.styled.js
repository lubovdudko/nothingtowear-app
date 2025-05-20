import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeroCardWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 2rem 0;
  text-align: center;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  display: block;
  opacity: 0.7;
  mask-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 1) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 1) 70%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const HeroActionsPane = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  display: flex;
  gap: 6rem;
`;

export const StyledHeroNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  min-width: 160px;
  text-decoration: none;
  height: 3rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  color: #444444;
  font-weight: 600;
  font-size: 1.5rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }
`;

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;

export const StyledHomeAnimationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
  padding: 20px;
  margin: 1.5rem;
  animation: ${fadeIn} 1s forwards;
`;

const stepFadeIn = keyframes`
  from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const StyledAnimationStep = styled.div`
  width: 250px;
  height: 200px;
  padding: 40px;
  background-color: #fdefefb9;
  border-radius: 30%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  &:nth-child(1) {
    animation: ${stepFadeIn} 2s forwards 0.2s;
  }
  &:nth-child(2) {
    animation: ${stepFadeIn} 2s forwards 0.4s;
  }
  &:nth-child(3) {
    animation: ${stepFadeIn} 2s forwards 0.6s;
  }
  &:nth-child(4) {
    animation: ${stepFadeIn} 2s forwards 0.8s;
  }
  & p {
    font-size: 1.3rem;
    font-family: "Lato", sans-serif;
    font-weight: 300;
    margin: 10px;
  }
`;
