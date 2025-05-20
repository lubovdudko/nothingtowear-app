import SavedOutfitCard from "../components/SavedOutfitCard/SavedOutfitCard";
import { useSelector, useDispatch } from "react-redux";
import { removeFromSavedOutfits } from "../store/savedOutfitsSlice";
import {
  Title,
  RegularText,
  TextHighlight,
} from "../components/Typography/Typography";
import { ClothingCardsListWrapper } from "../components/Layout/Layout.styled";
import { StyledButton } from "../components/Button/Button";
import Icon from "../components/Icon/Icon";
import addItemIcon from "../assets/icons/add.svg";
import EmptyState from "../components/EmptyState/EmptyState";
import { EmptyStateMessage } from "../components/EmptyState/EmptyState.styled";

function OutfitsPage() {
  const savedOutfits = useSelector((state) => state.savedOutfits);
  const hasCards = savedOutfits.length > 0;
  const dispatch = useDispatch();

  return (
    <>
      <Title>MY OUTFITS</Title>
      {!hasCards && (
        <EmptyState>
          <Icon src={addItemIcon}></Icon>
          <EmptyStateMessage>
            <RegularText>
              <TextHighlight>Your outfit space is empty.</TextHighlight>
            </RegularText>
            <RegularText>
              Head over to the closet to start creating your first look!
            </RegularText>
          </EmptyStateMessage>
          <StyledButton to="/closet" variant="primary">
            Go to closet
          </StyledButton>
        </EmptyState>
      )}
      {hasCards && (
        <ClothingCardsListWrapper>
          {savedOutfits.map((item) => (
            <SavedOutfitCard
              key={item.id}
              id={item.id}
              name={item.name}
              dateAdded={item.date}
              outfitItems={item.items}
              onRemoveOutfit={() => dispatch(removeFromSavedOutfits(item.id))}
            />
          ))}
        </ClothingCardsListWrapper>
      )}
    </>
  );
}

export default OutfitsPage;
