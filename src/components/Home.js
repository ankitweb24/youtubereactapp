import Homeimg from '../images/home.png';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <header>
        <div className="home_left_element">
          <h2>
            Web Design Amazing <br />
            App Prototypes For <br />
            Startups.
          </h2>
          <p>Do More, Go Upper</p>
          <span>Increase Productivity a simple to-do app</span>
          <NavLink className = "getmoreBtn" to="/service">Get More</NavLink>
        </div>
        <div className="home_right_element">
          <img src={Homeimg} alt="" />
        </div>
      </header>
      <Footer />
    </>
  );
};

export default Home;
