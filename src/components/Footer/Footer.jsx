import instagramIcon from "../../assets/icons/instagram.svg";
import youTubeIcon from "../../assets/icons/youtube.svg";
import pinterestIcon from "../../assets/icons/pinterest.svg";
import Icon from "../Icon/Icon";
import { IconsWrapper, FooterWrapper } from "./Footer.styled";
import { RegularText } from "../Typography/Typography";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <RegularText>NOTHING TO WEAR</RegularText>
      <RegularText>Copyright © {year}</RegularText>
      <IconsWrapper>
        <Icon src={instagramIcon} />
        <Icon src={youTubeIcon} />
        <Icon src={pinterestIcon} />
      </IconsWrapper>
    </FooterWrapper>
  );
}

export default Footer;
