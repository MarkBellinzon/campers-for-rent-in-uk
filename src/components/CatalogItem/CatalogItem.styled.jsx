import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  padding: 24px;

  gap: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
  width: 888px;
`;

export const Img = styled.div``;

export const Image = styled.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
  object-fit: cover;
`;


export const Wrapper = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
`;


export const WrapperCont = styled.div`
 width: 100%;
`;


export const CurrentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
`;

export const Price = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin-left: auto;
`;


export const FavoriteHeartBtn = styled.button`
  background: none;
  margin-left: 11px;

  svg {
    fill: ${({ $isFavorite }) =>
      $isFavorite ? 'var(--color-button)' : 'transparent'};
    stroke: ${({ $isFavorite }) =>
      $isFavorite ? 'none' : 'var(--color-text)'};
  }
`;

