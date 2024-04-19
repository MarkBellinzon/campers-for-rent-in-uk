import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon';
import { selectFavorites } from '../../redux/vans/selectors';
import {addToFavorites, removeFromFavorites} from '../../redux/vans/slice'
import {
  Card,
   Wrapper,
  WrapperCont,
  CurrentInfo,
  Title,
  Price,
  FavoriteHeartBtn,
  CurrentStar,
  StarCont,
  Location,
  Description,
  FillingTheVan,
  FillingItem,
  Button,
} from './CatalogItem.styled';
import {
  formatPrice,
  reverseLocation,
  capitalize,
} from '../../helpers/helpers';

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
              <Icon name="icon-heart" size={24} />
            </FavoriteHeartBtn>
          </CurrentInfo>
          <CurrentStar>
            <StarCont>
              <Icon name="icon-star" size={14} color={'var(--color-rating)'} />
              <span>
                {rating}({van.rewies.length}) rewies
              </span>
              <Location>
                <Icon name="icon-location" size={16} />
                <span> {renderLocation}</span>
              </Location>
            </StarCont>
          </CurrentStar>
          <Description>{description}</Description>
          <FillingTheVan>
            <FillingItem>
              <Icon name="icon-adults" size={20} />
              <span>{adults} Adults</span>
            </FillingItem>
            <FillingItem>
              <Icon name="icon-automatic" size={20} />
              <span>{capitalize(transmission)}</span>
            </FillingItem>
            <FillingItem>
              <Icon name="icon-petrol" size={20} />
              <span>{capitalize(engine)}</span>
            </FillingItem>
            <FillingItem>
              <Icon name="icon-kitchen" size={20} />
              <span> {details.kitchen} Kitchen</span>
            </FillingItem>
            <FillingItem>
              <Icon name="icon-beds" size={20} />
              <span> {details.beds} beds</span>
            </FillingItem>
            <FillingItem>
              <Icon name="icon-ac" size={20} />
              <span> AC </span>
            </FillingItem>
          </FillingTheVan>
        </WrapperCont>
        <Button onClick={openModal}>Show more</Button>
      </Wrapper>
      {isModalOpen && <Modal van={van} closeModal={closeModal} />}
    </Card>
  );
};

export default VanItem;
