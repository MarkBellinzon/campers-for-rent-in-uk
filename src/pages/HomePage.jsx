import { useSelector } from 'react-redux';
import Home from 'components/Home/Home';
import { HomePageWrap } from './Container/Container.styled';
import {Loader} from 'components/Loader/Loader';
import {
  selectAdvertsLoading,
  selectAdvertsError,
} from '../redux/vans/selectors';

const HomePage = () => {
  const isLoading = useSelector(selectAdvertsLoading);
  const error = useSelector(selectAdvertsError);
  return (
    <HomePageWrap>
      <Home />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </HomePageWrap>
  );
};

export default HomePage;
