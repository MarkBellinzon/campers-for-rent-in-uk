import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalCont = styled.div`
  position: relative;
  max-width: 982px;
  max-height: 90vh;
  padding: 40px 40px 68px 40px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: var(--color-background);
  z-index: 100;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
`;

export const SideContent = styled.div`
  overflow-y: auto;
  max-height: 70vh;
  margin-right: -16px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-scroll);
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-main);
  }
`;

export const ImageList = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ImageItem = styled.div`
  border-radius: 10px;
  img {
    width: 290px;
    height: 310px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Description = styled.div`
  color: var(--color-main);
`;

export const InfoContainer = styled.div`
  margin-top: 44px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -24px;
    width: 902px;
    height: 1px;
    background-color: rgba(16, 24, 40, 0.2);
  }
`;

export const List = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

export const ListItem = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Button = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  transition: color 0.3s;

  &:hover,
  &:focus,
  &.active {
    &::after {
      content: '';
      position: absolute;
      display: block;
      background-color: var(--color-button);
      width: 100%;
      top: 45px;
      height: 5px;
      border-radius: 5px 5px 0 0;
    }
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  padding-top: 68px;
  gap: 24px;
`;
