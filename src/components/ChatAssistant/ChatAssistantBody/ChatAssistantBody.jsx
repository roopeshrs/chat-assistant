import './ChatAssistantBody.css'
import BotMessage from './BotMessage/BotMessage'
import UserMessage from './UserMessage/UserMessage'
import TagContainer from './TagContainer/TagContainer'
import BotMessageSuggestion from './BotMessage/BotMessageSuggestion'

const ChatAssistantBody = () => {
  return (
    <div className='chat-assistant-body'>
      <BotMessage />
      <UserMessage />
      <TagContainer />
      <BotMessageSuggestion />
    </div>
  )
}

export default ChatAssistantBody