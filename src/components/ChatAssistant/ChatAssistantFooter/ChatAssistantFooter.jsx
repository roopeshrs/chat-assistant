import React from 'react'
import logo from '../../../assets/images/logo.png'
import paperclip from '../../../assets/images/paperclip.svg'
import sendArrowImage from '../../../assets/images/send-arrow.svg'
import './ChatAssistantFooter.css'

const ChatAssistantFooter = () => {
  return (
    <div className='chat-assistant-footer'>
      <div className='chat-assistant-footer__send-message'>
        <div className='chat-assistant-footer__input-box'>
          <input type='text' placeholder='Type your message' />
          <img src={paperclip} alt='Attachment' />
        </div>
        <button className='chat-assistant-footer__send'>
          <img src={sendArrowImage} alt='Send' />
        </button>
      </div>
      <p className='chat-assistant-footer__copyright'>Powered by <span>Krunk.ai</span> <img src={logo} alt='Logo' /></p>
    </div>
  )
}

export default ChatAssistantFooter