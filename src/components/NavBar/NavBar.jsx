import { useSelector } from "react-redux";
import {
  HeaderWrapper,
  LogoTitle,
  Counter,
  NavigationList,
  NavigationItem,
  StyledNavLink,
} from "./NavBar.styled";

function NavBar() {
  const outfit = useSelector((state) => state.outfit);
  return (
    <HeaderWrapper data-component="HeaderWrapper">
      <LogoTitle>NOTHING TO WEAR</LogoTitle>
      <nav>
        <NavigationList>
          <NavigationItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to="/closet">Closet</StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to="/outfit-builder">
              Builder
              <Counter
                style={
                  outfit.length > 0 ? { display: "flex" } : { display: "none" }
                }
              >
                {outfit.length > 0 && outfit.length}
              </Counter>
            </StyledNavLink>
          </NavigationItem>
          <NavigationItem>
            <StyledNavLink to="/outfits">Outfits</StyledNavLink>
          </NavigationItem>
        </NavigationList>
      </nav>
    </HeaderWrapper>
  );
}

export default NavBar;
