import { Link } from 'react-router-dom';
import { Button, HomeCont } from './Home.styled';

const Home = () => {
  return (
    <HomeCont>
      <Link to="/catalog">
        <Button>Start</Button>
      </Link>
    </HomeCont>
  );
};

export default Home;