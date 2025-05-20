import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  background-color: #d8a8a8;
  padding: 1rem 2rem;
  color: #444444;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const Counter = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ff5c5c;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  display: none;
  font-family: "Lato", sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
`;

export const NavigationItem = styled.li`
  flex: 1;
  text-align: center;
  display: flex;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border-radius: 8px;
  transition: color 0.3s ease, background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    color: #fff;
    background-color: #333;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  &.active {
    color: #fff;
    background-color: #333;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
`;
