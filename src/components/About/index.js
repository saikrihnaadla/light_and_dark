import './index.css'
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const darkAbout = () => (
        <div className="home-bg-dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
            alt="about"
            className="home-image"
          />
          <h1 className="dark-home-title">About</h1>
        </div>
      )

      const lightAbout = () => (
        <div className="home-bg-white">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
            alt="about"
            className="home-image"
          />
          <h1 className="light-home-title">About</h1>
        </div>
      )

      return (
        <div>
          <NavBar />
          {isDarkTheme ? darkAbout() : lightAbout()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
