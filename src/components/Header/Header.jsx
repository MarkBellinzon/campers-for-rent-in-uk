import {HeaderWrap, Link, NavList} from './Header.styled';


const Header = () => {
  return (
    <>
      <HeaderWrap>
        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
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