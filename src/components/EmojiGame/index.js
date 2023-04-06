import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// Write your code here.
class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isGameOver: false, selectedIds: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onclickEmoji = id => {
    const {selectedIds, score, topScore} = this.state
    const isIdAlreadyExist = selectedIds.includes(id)
    if (isIdAlreadyExist === false) {
      this.setState(preState => ({
        score: preState.score + 1,
        selectedIds: [...preState.selectedIds, id],
      }))
      if (score + 1 === 12) {
        this.setState({isGameOver: true})
      }
    } else {
      this.setState(() => ({
        // topScore: score > topScore ? score : topScore,
        isGameOver: true,
      }))
    }
  }

  onClickPlayAgain = () => {
    // this.setState({score: 0, selectedIds: [], isGameOver: false})
    const {score, topScore} = this.state
    this.setState(preState => ({
      topScore: score > topScore ? score : topScore,
      score: 0,
      selectedIds: [],
      isGameOver: false,
    }))
  }

  render() {
    // const {emojisList} = this.props
    const emojisList = this.shuffledEmojisList()
    const {score, topScore, isGameOver} = this.state
    return (
      <div className="page_container">
        {isGameOver === false ? (
          <div>
            <NavBar score={score} topScore={topScore} />
            <div className="content_container">
              <ul className="ul_emoji_container">
                {emojisList.map(eachEmoji => (
                  <EmojiCard
                    onclickEmoji={this.onclickEmoji}
                    key={eachEmoji.id}
                    details={eachEmoji}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <NavBar />
            <WinOrLoseCard
              onClickPlayAgain={this.onClickPlayAgain}
              gotPoints={score}
              outOfPoints={12}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
