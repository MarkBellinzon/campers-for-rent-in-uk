import { useDispatch, useSelector } from 'react-redux';
import { CatalogWrap, Wrapper } from './Container/Container.styled';
import { useEffect, useRef, useState } from 'react';
import {
  selectVansLoading,
  selectVansError,
  selectVans,
} from '../redux/vans/selectors';
import { getVans } from '../redux/vans/operations';
import CatalogList from 'components/CatalogList/CatalogList';
import { Loader } from '../components/Loader/Loader';
import {LoadMore} from '../pages/Container/Container.styled';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const contRef = useRef(null);

  const isLoading = useSelector(selectVansLoading);
  const error = useSelector(selectVansError);
  const vans = useSelector(selectVans);

  useEffect(() => {
    dispatch(getVans(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (vans.length < 4 || vans.length % 4 !== 0) {
      setShowLoadMore(false);
      
    } else {
      setShowLoadMore(true);
    }
  }, [vans]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
   
  };

  return (
    <CatalogWrap>
      <Wrapper ref={contRef} >
        <CatalogList vans={vans} />
        {showLoadMore && (
          <LoadMore type="button" onClick={handleLoadMore}>
            Load more
          </LoadMore>
        )}
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
      </Wrapper>
    </CatalogWrap>
  );
};

export default CatalogPage;
