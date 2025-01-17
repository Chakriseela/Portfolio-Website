import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">SC</p>
      <ul className="nav-menu">
        <li>
          <a className="navLinks" href="#home">
            About me
          </a>
        </li>
        <li>
          <a className="navLinks" href="#education">
            Education
          </a>
        </li>
        <li>
          <a className="navLinks" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="navLinks" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chakravarthi-seela/"
            target="_blank"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Chakriseela" target="_blank">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://x.com/Chakrav85577550" target="_blank">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
