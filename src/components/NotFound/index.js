import './index.css'
import NavBar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value

      return (
        <div>
          <NavBar />
          <div className={isDarkTheme ? 'not-found-dark' : 'not-found-light'}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-image"
            />
            <h1 className={isDarkTheme ? 'dark-n' : 'light-n'}>
              Lost Your Way?
            </h1>
            <p className={isDarkTheme ? 'dark-n' : 'light-n'}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext>
)

export default NotFound
