import './index.scss'
import { Link, NavLink } from "react-router-dom";
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouseUser,faUserCheck } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt="slobodan"/>
    </Link>
    <nav>
    <NavLink exact="true" activeclassName="active" to="/">
      <FontAwesomeIcon icon={faHouseUser} color="#115173"/>
    </NavLink>

      <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUserCheck} color="#115173"/>
      </NavLink>

      <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#115173'/>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samuel-killagane-08471923b/">
          <FontAwesomeIcon icon={faLinkedin} color="#115173"/>
          </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/kingslysam">
          <FontAwesomeIcon icon={faGithub} color="#115173"/>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar