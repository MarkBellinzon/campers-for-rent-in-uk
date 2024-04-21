import styled from 'styled-components';

export const Button = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 10px;
  background-color: yellow;
  color: red;
  /* letter-spacing: -0.5%; */
  text-align: center;
  text-transform: uppercase;
  outline: none;
  transition: transform 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: greenyellow;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  color: #ffffff;
  max-width: 800px;
  align-items: center;
  gap: 30px;
  justify-content: end;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #005847;
  text-align: center;
`;

export const Paragraf = styled.h1`
  font-size: 20px;
  color: #2a2a29;
  text-align: center;
`;
