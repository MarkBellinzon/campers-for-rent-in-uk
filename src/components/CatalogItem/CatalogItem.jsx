import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Img, Image, Wrapper, CurrentInfo, Title, Price, FavoriteHeartBtn } from './CatalogItem.styled';

const VanItem = ({ van }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(selectFavorites);

  const {
    name,
    price,
    rating,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = van;
  const isFavorite = favorites.find(item => item._id === van._id);
  const formattedPrice = formatPrice(price);
  const renderLocation = reverseLocation(location);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <Card>
      <Img>
        {van.gallery && van.gallery.length > 0 ? (
          <Image src={van.gallery[0]} alt={name} />
        ) : (
          <DefaultImage alt="no photo" />
        )}
      </Img>
      <Wrapper>
        <WrapperCont>
          <CurrentInfo>
            <Title>{name}</Title>
            <Price>&euro;{formattedPrice}</Price>
            <FavoriteHeartBtn
              onClick={() =>
                isFavorite
                  ? dispatch(removeFromFavorites(van._id))
                  : dispatch(addToFavorites(van))
              }
              $isFavorite={isFavorite}
            >
              <FavoriteHeart size={24} />
            </FavoriteHeartBtn>
          </CurrentInfo>
        </WrapperCont>
        <Button onClick={openModal}>Show more</Button>
      </Wrapper>
    </Card>
  );
};

export default VanItem;
