import './BotMessage.css'

const BotMessage = () => {
  return (
    <div className='bot-message'>
      <div className='bot-message__text'>
        <h3 className='bot-message__message'>
            Hi Sam! I am your personal shopping assistant, how can I help you today?
        </h3>
      </div>
      <p className='bot-message__timestamp'>4:45 PM</p>
    </div>
  )
}

export default BotMessage