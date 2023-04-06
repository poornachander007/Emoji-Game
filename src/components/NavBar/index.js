// Write your code here.
import './index.css'

const appLogoUrl = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
const NavBar = props => {
  const {score, topScore} = props
  //   if (details !== undefined) {
  //   }
  return (
    <nav className="my_nav_container">
      <div className="logo_container">
        <img src={appLogoUrl} alt="emoji logo" className="app_logo" />
        <h1 className="logo_name">Emoji Game</h1>
      </div>
      {score !== undefined && topScore !== undefined ? (
        <div className="score_container">
          <p className="option">Score: {score}</p>
          <p className="option">Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
