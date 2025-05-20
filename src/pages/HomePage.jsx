import DescriptiveText, {
  HomeHeading,
  Title,
  HomeDescriptiveText,
} from "../components/Typography/Typography";
import {
  HeroCardWrapper,
  HeroImage,
  HeroActionsPane,
  StyledHeroNavLink,
  StyledHomeAnimationWrapper,
  StyledAnimationStep,
} from "./HomePage.styled";
import closetImage from "../assets/images/organized_closet.jpg";
import Icon from "../components/Icon/Icon";
import uploadIcon from "../assets/icons/upload.svg";
import arrangeIcon from "../assets/icons/arrange.svg";
import styleIcon from "../assets/icons/apparel.svg";
import shineIcon from "../assets/icons/shine.svg";

function HomePage() {
  return (
    <>
      <HomeHeading>
        <em>your</em> closet, but organized.
      </HomeHeading>
      <HeroCardWrapper data-component="HeroCardWrapper">
        <HeroImage src={closetImage} alt="organized closet photo"></HeroImage>
        <HeroActionsPane data-component="HeroActionsPane">
          <StyledHeroNavLink to="/closet">Add clothes</StyledHeroNavLink>
          <StyledHeroNavLink to="/outfit-builder">
            Create outfit
          </StyledHeroNavLink>
        </HeroActionsPane>
      </HeroCardWrapper>
      <HomeDescriptiveText>
        Your wardrobe should work for you, not stress you out. With this app,
        you can organize your clothes, plan your looks, and even get ready for
        travel without the last-minute panic. Everything’s visual, easy to use,
        and tailored to your style. Start with a few pieces – you’ll be
        surprised how much easier outfit planning gets.
      </HomeDescriptiveText>
      <StyledHomeAnimationWrapper>
        <StyledAnimationStep>
          <Icon style={{ opacity: "0.6" }} src={uploadIcon}></Icon>
          <Title as="h2">Upload</Title>
          <DescriptiveText>Upload your clothes to get started.</DescriptiveText>
        </StyledAnimationStep>
        <StyledAnimationStep>
          <Icon style={{ opacity: "0.6" }} src={arrangeIcon}></Icon>
          <Title as="h2">Arrange</Title>
          <DescriptiveText>
            Organize your clothes by categories.
          </DescriptiveText>
        </StyledAnimationStep>
        <StyledAnimationStep>
          <Icon style={{ opacity: "0.6" }} src={styleIcon}></Icon>
          <Title as="h2">Style</Title>
          <DescriptiveText>
            Create stunning outfits for any occasion.
          </DescriptiveText>
        </StyledAnimationStep>
        <StyledAnimationStep>
          <Icon style={{ opacity: "0.6" }} src={shineIcon}></Icon>
          <Title as="h2">Shine</Title>
          <DescriptiveText>Look great daily, stress-free.</DescriptiveText>
        </StyledAnimationStep>
      </StyledHomeAnimationWrapper>
    </>
  );
}

export default HomePage;
