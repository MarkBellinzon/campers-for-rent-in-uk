import { useRef, useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import { formatPrice, reverseLocation } from '../../helpers/helpers';
import { Title, Location, Price,  RatingWrapper, RatingCont, } from '../../components/CatalogItem/CatalogItem.styled';
import BookingForm from 'components/BookingForm/BookingForm';
import Reviews from 'components/Reviews/Reviews';
import Features from 'components/Features/Features';

import {
  ModalWrapper,
  ModalCont,
  CloseBtn,
  SideContent,
  ImageList,
  ImageItem,
  Description,
  InfoContainer,
  List,
  ListItem,
  Button,
  ModalWrap,
} from './Modal.styled';

const Modal = ({ van, closeModal }) => {
  const [isActive, setIsActive] = useState('');
  const modalRef = useRef(null);

  const { _id, name, price, rating, location, description, reviews, gallery } =
    van;
  const formattedPrice = formatPrice(price);
  const renderLocation = reverseLocation(location);

  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      closeModal();
      document.body.style.overflow = 'visible';
    }
  };

  const handleFeaturesClick = () => setIsActive('features');
  const handleReviewsClick = () => setIsActive('reviews');

  return (
    <ModalWrapper onClose={handleCloseModal}>
      <ModalCont ref={modalRef}>
        <CloseBtn
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          <Icon name="icon-close" size={40} />
        </CloseBtn>
        <Title>{name}</Title>
        <RatingWrapper>
          <RatingCont>
            <Icon name="icon-star" />
            <span>{`${rating}(${reviews.length} Reviews)`}</span>
            <Location>
              <Icon name="icon-location" size={20} />
              <span>{renderLocation}</span>
            </Location>
          </RatingCont>
        </RatingWrapper>
        <Price>&euro;{formattedPrice}</Price>

        <SideContent>
          <ImageList>
            {gallery.length > 0 &&
              gallery.map((link, index) => (
                <ImageItem key={`${_id}/${index}`}>
                  <img src={link} alt={name} />
                </ImageItem>
              ))}
          </ImageList>
          <Description>{description}</Description>
          <InfoContainer>
            <List>
              <ListItem>
                <Button
                  onClick={handleFeaturesClick}
                  className={isActive === 'features' ? 'active' : ''}
                >
                  Features
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={handleReviewsClick}
                  className={isActive === 'reviews' ? 'active' : ''}
                >
                  Reviews
                </Button>
              </ListItem>
            </List>
          </InfoContainer>
          <ModalWrap>
            {isActive === 'features' && (
              <>
                <Features van={van} />
                <BookingForm closeModal={closeModal} />
              </>
            )}
            {isActive === 'reviews' && (
              <>
                <Reviews van={van} />
                <BookingForm closeModal={closeModal} />
              </>
            )}
          </ModalWrap>
        </SideContent>
      </ModalCont>
    </ModalWrapper>
  );
};

export default Modal;
