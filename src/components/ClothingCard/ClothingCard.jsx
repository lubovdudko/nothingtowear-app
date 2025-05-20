import {
  ClothingCardWrapper,
  ColorIndicator,
  SwitchedButton,
} from "./ClothingCard.styled";
import DescriptiveText, {
  TextHighlight,
  Title,
} from "../Typography/Typography";
import { ClothingImage } from "../Image/Image";

function ClothingCard(props) {
  return (
    <ClothingCardWrapper data-component="ClothingCardWrapper">
      <Title as="h3">{props.name}</Title>
      <ClothingImage src={props.imgURL} alt={props.name} />
      <DescriptiveText>
        <TextHighlight>Type:</TextHighlight> {props.type}
      </DescriptiveText>
      <DescriptiveText>
        <TextHighlight>Brand:</TextHighlight> {props.brand}
      </DescriptiveText>
      <DescriptiveText>
        <TextHighlight>Color:</TextHighlight> {props.color}{" "}
        <ColorIndicator color={props.color}></ColorIndicator>
      </DescriptiveText>
      <DescriptiveText>
        <TextHighlight>Season(s):</TextHighlight> {props.season}
      </DescriptiveText>
      <SwitchedButton
        onClick={props.isAdded ? props.removeFromOutfit : props.addToOutfit}
        $isAdded={props.isAdded}
      >
        {props.isAdded ? "Remove from outfit" : "Add to outfit"}
      </SwitchedButton>
    </ClothingCardWrapper>
  );
}

export default ClothingCard;
