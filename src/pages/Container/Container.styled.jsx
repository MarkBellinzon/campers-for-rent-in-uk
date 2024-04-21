import styled from 'styled-components';

export const HomePageWrap = styled.div`
  background-color: var (--color-main);
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.2),
      rgba(46, 47, 66, 0.6)
    ),
    ;
  height: 100vh;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const CatalogWrap = styled.div`
 display: flex;
  gap: 64px;
`;

export const LoadMore = styled.button`
  padding: 16px 32px;
  width: 147px;
  align-items: center;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;
  transition: transform 0.5s, border 0.5s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid var(--color-button-hover);
    transform: scale(1.05);
  }
`;



