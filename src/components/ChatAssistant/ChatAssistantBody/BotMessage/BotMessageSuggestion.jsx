import './BotMessage.css'
import bagImage from '../../../../assets/images/bag.jpg'
import badgeImage from '../../../../assets/images/badge.svg'
import BotMessageFilter from './BotMessageFilter'

const BotMessageSuggestion = () => {
  return (
    <div className='bot-message'>
    <div className='bot-message__text'>
      <div className='bot-message__text-attachment'>
        <img src={bagImage} alt='Bag Image' />
        <div className='bot-message__text-attachment-text'>
          <div className='bot-message__text-attachment-text-title'>
            <div>
              <h3>Bags on <span>Timpu</span></h3>
              <img src={badgeImage} alt='Badge Image' />
            </div>
            <p>1123 products</p>
          </div>
        </div>
      </div>
      <h3 className='bot-message__message'>Or set filter and help us choose the best bag for you.</h3>
    </div>
    <p className='bot-message__timestamp'>4:48 PM</p>
    <BotMessageFilter />
  </div>  
  )
}

export default BotMessageSuggestion