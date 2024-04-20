import styled from 'styled-components';

export const Button = styled.button`
  width: 160px;
  height: 56px;
  border-radius: 200px;
  background-color: var(--color-button);
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.5%;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  transition: transform 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--color-button-hover);
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
  padding-top: 160px;
  padding-left: 100px;
  color:#ffffff;
  max-width: 800px;
  text-align: center;
  align-items: center;
  gap: 30px;
`;


