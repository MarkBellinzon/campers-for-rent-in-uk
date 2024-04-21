import { HeaderWrap, Link, NavList } from './Header.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Header = (closeMenu) => {
  return (
    <>
      <HeaderWrap>
        <NavList>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/catalog" onClick={closeMenu}>Catalog</Link>
          </li>
          <li>
            <Link to="/favorites" onClick={closeMenu}>Favorites</Link>
          </li>
        </NavList>
      </HeaderWrap>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
