import VanItem from '../CatalogItem/CatalogItem';
import { VanList } from './CatalogList.styled';

const CatalogList = ({ vans, openModal }) => {
  return (
    <VanList>
      {vans.map((van, _id) => (
        <VanItem key={_id} van={van} onClick={openModal} />
      ))}
    </VanList>
  );
};

export default CatalogList;
