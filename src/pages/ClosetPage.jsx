import ClothingCard from "../components/ClothingCard/ClothingCard";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToOutfit,
  removeFromOutfit,
  removeAllFromOutfit,
} from "../store/outfitSlice";
import { StyledButton } from "../components/Button/Button";
import { Title } from "../components/Typography/Typography";
import { ActionsPane } from "../components/ActionsPane/ActionsPane.styled";
import { Loader } from "../components/Spinner/Spinner";
import { ClothingCardsListWrapper } from "../components/Layout/Layout.styled";

function ClosetPage(props) {
  const [clothes, setClothes] = useState([]);
  const dispatch = useDispatch();
  const outfit = useSelector((state) => state.outfit);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}data/clothes.json`
        );
        const json = await response.json();
        setClothes(json);
      } catch (err) {
        console.error("Error while loading clothes:", err);
        setClothes("");
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };
    loadData();
  }, []);

  return (
    <>
      <Title>MY CLOSET</Title>
      {outfit.length > 0 && (
        <ActionsPane>
          <StyledButton to="/outfit-builder" variant="primary">
            Open outfit builder
          </StyledButton>
          <StyledButton
            variant="secondary"
            onClick={() => dispatch(removeAllFromOutfit())}
          >
            Clear current outfit
          </StyledButton>
        </ActionsPane>
      )}
      {isLoading && <Loader visible={isLoading} />}
      {!isLoading && (
        <ClothingCardsListWrapper>
          {clothes.map((item, index) => {
            return (
              <ClothingCard
                key={item.id}
                name={item.name}
                brand={item.brand}
                type={item.type}
                color={item.color}
                season={item.season}
                imgURL={item.imgURL}
                isAdded={outfit.some((outfitItem) => outfitItem.id === item.id)}
                addToOutfit={() => dispatch(addToOutfit(item))}
                removeFromOutfit={() => dispatch(removeFromOutfit(item.id))}
              />
            );
          })}
        </ClothingCardsListWrapper>
      )}
    </>
  );
}

export default ClosetPage;
