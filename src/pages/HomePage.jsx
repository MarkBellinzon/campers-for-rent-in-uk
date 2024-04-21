import { useSelector } from 'react-redux';
import Home from 'components/Home/Home';
import { HomePageWrap } from './Container/Container.styled';
import {Loader} from 'components/Loader/Loader';
import {
  selectVansLoading,
  selectVansError,
} from '../redux/vans/selectors';

const HomePage = () => {
  const isLoading = useSelector(selectVansLoading);
  const error = useSelector(selectVansError);
  return (
    <HomePageWrap>
      <Home />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </HomePageWrap>
  );
};

export default HomePage;
