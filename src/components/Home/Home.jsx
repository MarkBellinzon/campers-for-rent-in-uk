import { Link } from 'react-router-dom';
import { Button, HomeCont, Wrapper, Paragraf, Title } from './Home.styled';


const Home = () => {
  return (
    <HomeCont>
      <img src='../../assets/image/сompanies.png' alt='Campers'/>
      <Wrapper>
        <Title>Camper Van Rental Ukraine</Title>
        <Paragraf>
          Camper vans are the smallest, most compact RV type – perfect for
          vacations that include city trips. They’re easy to drive and park,
          which makes them very popular among beginners as well as camping
          experts. Even small, winding country roads and old Ukrainian cities
          with narrow streets are easy to navigate with our camper vans. Ready
          to plan your Ukrainian adventure? Book your camper van in Ukraine
          today!
        </Paragraf>
      </Wrapper>
      <Link to="/catalog">
        <Button>Start</Button>
      </Link>
    </HomeCont>
  );
};

export default Home;
