import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitile from "../../assets/images/raja.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitile} alt="Logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeClassName='active' to={"/"}>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeClassName='active' className="about-link" to={"/about"}>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact="true" activeClassName='active' className="contact-link" to={"/contact"}>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' href="">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a target='_blank' href="">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a target='_blank' href="">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar;
