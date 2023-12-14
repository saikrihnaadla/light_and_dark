import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggle = () => {
        toggleTheme()
      }

      const darkOrLight = isDarkTheme ? 'dark-theme' : 'light-theme'
      return (
        <nav className={`nav-bg-container ${darkOrLight}`}>
          <ul className="header-container">
            <li>
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="logo-size"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="logo-size"
                />
              )}
            </li>
            <li>
              <div className="home-about-bg-container">
                <Link to="/" className="text-underline">
                  <p className={isDarkTheme ? 'light-para' : 'dark-para'}>
                    Home
                  </p>
                </Link>
                <Link to="/about" className="text-underline">
                  <p className={isDarkTheme ? 'light-para' : 'dark-para'}>
                    About
                  </p>
                </Link>
                <Link to="/random" className="text-underline">
                  <p className={isDarkTheme ? 'light-para' : 'dark-para'}>
                    Random
                  </p>
                </Link>
              </div>
            </li>
            <li>
              <button
                type="button"
                onClick={onClickToggle}
                data-testid="theme"
                className="theme-image-style"
              >
                {isDarkTheme ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="theme-style-size"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="theme-style-size"
                  />
                )}
                <p className="click-me">Click me</p>
              </button>
            </li>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
