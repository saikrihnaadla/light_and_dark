import './index.css'

import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const darkHome = () => (
        <div className="home-bg-dark">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
            alt="home"
            className="home-image"
          />
          <h1 className="dark-home-title">Home</h1>
        </div>
      )

      const lightHome = () => (
        <div className="home-bg-white">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
            alt="home"
            className="home-image"
          />
          <h1 className="light-home-title">Home</h1>
        </div>
      )

      return (
        <div>
          <NavBar />
          {isDarkTheme ? darkHome() : lightHome()}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
