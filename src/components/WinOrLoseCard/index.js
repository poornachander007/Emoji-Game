// Write your code here.
import './index.css'

const loseImageUrl =
  'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {gotPoints, outOfPoints, onClickPlayAgain} = props
  const playAgain = () => {
    onClickPlayAgain()
  }
  const resultHeadingLose = 'You Lose'
  const resultHeadingWin = 'You Won'
  const resultHeading =
    gotPoints === outOfPoints ? resultHeadingWin : resultHeadingLose
  const resultDiscriptLose = 'Score'
  const resultDiscriptWin = 'Best Score'
  const resultDiscript =
    gotPoints === outOfPoints ? resultDiscriptWin : resultDiscriptLose
  const imageUrl = gotPoints === outOfPoints ? winImageUrl : loseImageUrl
  return (
    <div className="content_container">
      <div className="text_container">
        <h1 className="wonOrLoseHeading">{resultHeading}</h1>
        <p className="scoreOrBestScore">{resultDiscript}</p>
        <p className="displayScore">
          {gotPoints}/{outOfPoints}
        </p>
        <div>
          <button onClick={playAgain} type="button">
            Play Again
          </button>
        </div>
      </div>
      <div className="img_container">
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
