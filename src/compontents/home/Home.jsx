import Hero from '../hero/Hero.jsx';

// eslint-disable-next-line react/prop-types
const Home = ({userBets}) => {
    console.log('Home.js Data from Hero.js:', userBets);
    return (
        <Hero userBets = {userBets} />
    )
}
export default Home;
