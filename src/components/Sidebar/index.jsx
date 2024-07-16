import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoU from '../../assets/images/codeLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiagramProject,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGithubSquare,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/personal-portfolio">
        <img src={LogoU} alt="logo" />
        <p className="sub-logo">Uroš</p>
      </Link>
      <nav>
        <NavLink
          exact="true"
          acticeclassname="active"
          to="/personal-portfolio/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          acticeclassname="active"
          className="about-link"
          to="/personal-portfolio/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          acticeclassname="active"
          className="project-link"
          to="/personal-portfolio/project"
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          acticeclassname="active"
          className="contact-link"
          to="/personal-portfolio/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/UrosJavaScript?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/uros-kovcic-10286417b"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Uros12345678?tab=repositories"
          >
            <FontAwesomeIcon icon={faGithubSquare} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+381691217273&amp;text=Hello! Contact me :)."
          >
            <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
