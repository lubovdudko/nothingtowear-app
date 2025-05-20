import SavedOutfitPreview from "../SavedOutfitPreview/SavedOutfitPreview";
import { StyledButton } from "../Button/Button";
import DescriptiveText, {
  Title,
  TextHighlight,
} from "../Typography/Typography";
import { SavedOutfitCardWrapper } from "./SavedOutfitCard.styled";
import { ActionsPane } from "../ActionsPane/ActionsPane.styled";

function SavedOutfitCard(props) {
  const date = new Date(props.dateAdded).toLocaleDateString();

  return (
    <SavedOutfitCardWrapper data-component="SavedOutfitCardWrapper">
      <Title as="h3">{props.name}</Title>
      <SavedOutfitPreview scale={0.6} itemsOfOutfit={props.outfitItems} />
      <DescriptiveText>
        Date added: <TextHighlight>{date}</TextHighlight>
      </DescriptiveText>
      <ActionsPane>
        <StyledButton variant="primary"> Edit</StyledButton>
        <StyledButton variant="secondary" onClick={props.onRemoveOutfit}>
          Delete
        </StyledButton>
      </ActionsPane>
    </SavedOutfitCardWrapper>
  );
}

export default SavedOutfitCard;
