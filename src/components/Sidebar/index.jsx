/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from "../../assets/images/R-Logo.png";
import LogoSubtitile from "../../assets/images/raja.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHammer, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
            <NavLink exact="true" activeClassName='active' className="work-link" to={"/mywork"}>
                <FontAwesomeIcon icon={faHammer} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' href="https://www.linkedin.com/in/raja-aravindha-594686196/" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a target='_blank' href="https://github.com/Raja-09" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a target='_blank' href="https://twitter.com/Rajawastaken" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar;
