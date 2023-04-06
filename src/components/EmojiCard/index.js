// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, onclickEmoji} = props
  const {emojiName, emojiUrl, id} = details // id,

  const clickEmoji = () => {
    onclickEmoji(id)
  }
  return (
    <li className="emoji_card_container">
      <button type="button" onClick={clickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
