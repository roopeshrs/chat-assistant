import './ChatAssistantHeader.css'
import robotImage from '../../../assets/images/robot.png'
import badgeImage from  '../../../assets/images/badge.svg'

const ChatAssistantHeader = () => {
  return (
    <div className='chat-assistant-header'>
      <div className='chat-assistant-header__left'>
        <div className='chat-assistant-header__avatar'>
          <div className='chat-assistant-header__avatar-box'>
            <img src={robotImage} alt='Avatar' />
          </div>
          <div className='chat-assistant-header__avatar-status'></div>
        </div>
        <div className='chat-assistant-header__text'>
          <h3>Timpu <img src={badgeImage} alt='Badge' /></h3>
          <p>Chat assistant</p>
        </div>
      </div>
      <div className='chat-assistant-header__right'>
        <div className='chat-assistant-header__status'></div>
        <p>Online</p>
      </div>
    </div>
  )
}

export default ChatAssistantHeader