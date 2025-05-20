import { useSelector, useDispatch } from "react-redux";
import { removeFromOutfit, removeAllFromOutfit } from "../store/outfitSlice";
import { addToSavedOutfits } from "../store/savedOutfitsSlice";
import { useState, useEffect } from "react";
import { StyledButton } from "../components/Button/Button";
import BaseInput from "../components/Input/Input";
import {
  Title,
  RegularText,
  TextHighlight,
} from "../components/Typography/Typography";
import OutfitGrid from "../components/OutfitGrid/OutfitGrid";
import { ActionsPane } from "../components/ActionsPane/ActionsPane.styled";
import { Loader } from "../components/Spinner/Spinner";
import EmptyState from "../components/EmptyState/EmptyState";
import { EmptyStateMessage } from "../components/EmptyState/EmptyState.styled";
import Icon from "../components/Icon/Icon";
import addItemIcon from "../assets/icons/add.svg";

function OutfitBuilder() {
  const dispatch = useDispatch();
  const outfit = useSelector((state) => state.outfit);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalCards = outfit.length;
  const hasCards = totalCards > 0;
  const allImagesLoaded = hasCards && loadedCount === totalCards;
  const [outfitName, setOutfitName] = useState("");

  const handleCardLoaded = () => {
    setLoadedCount((prev) => {
      const next = prev + 1;
      return next;
    });
  };

  useEffect(() => {
    setLoadedCount(0);
  }, [outfit]);

  return (
    <>
      <Title>CREATE OUTFIT</Title>
      {!hasCards && (
        <EmptyState>
          <Icon src={addItemIcon}></Icon>
          <EmptyStateMessage>
            <RegularText>
              <TextHighlight>Start building your outfit.</TextHighlight>
            </RegularText>
            <RegularText>
              Pick items from your closet to get started.
            </RegularText>
          </EmptyStateMessage>
          <StyledButton to="/closet" variant="primary">
            Go to closet
          </StyledButton>
        </EmptyState>
      )}
      {outfit.length > 0 && (
        <ActionsPane>
          <RegularText>Outfit name</RegularText>
          <BaseInput
            type="text"
            value={outfitName}
            onChange={(e) => setOutfitName(e.target.value)}
          ></BaseInput>
          <StyledButton
            variant="primary"
            onClick={() => {
              dispatch(
                addToSavedOutfits({ outfitItems: outfit, name: outfitName })
              );
              setOutfitName("");
            }}
          >
            Save outfit
          </StyledButton>
          <StyledButton
            variant="secondary"
            onClick={() => dispatch(removeAllFromOutfit())}
          >
            Clear current outfit
          </StyledButton>
        </ActionsPane>
      )}
      {hasCards && !allImagesLoaded && <Loader visible={!allImagesLoaded} />}
      <OutfitGrid
        outfitItems={outfit}
        isEditable={true}
        useTransparent={true}
        onLoad={handleCardLoaded}
        allImagesLoaded={allImagesLoaded}
        onRemoveOutfit={(id) => dispatch(removeFromOutfit(id))}
      />
    </>
  );
}

export default OutfitBuilder;
