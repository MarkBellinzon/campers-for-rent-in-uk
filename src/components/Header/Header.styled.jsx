import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--color-button);
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 150px;
  font-size: 24px;
  font-weight: bold;
`;

export const Link = styled(NavLink)`  
  align-items: center;
  padding: 6px 10px;
  border-radius: 10px;
  text-decoration: none;
  transition: box-shadow 0.5s, color 0.5s, transform 0.5s  ease-in-out;;

  &.active {     
    transform: scale(1.1);
    color: var(--color-button);
  }


    &:hover,
    &:focus {
      transform: scale(1.1);
      color: var(--color-button);
    }
  
`;