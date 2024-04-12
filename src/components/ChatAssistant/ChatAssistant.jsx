import ChatAssistantHeader from "./ChatAssistantHeader/ChatAssistantHeader"
import ChatAssistantBody from "./ChatAssistantBody/ChatAssistantBody"
import ChatAssistantFooter from "./ChatAssistantFooter/ChatAssistantFooter"
import './ChatAssistant.css';

const ChatAssistant = () => {
  return (
    <div className="chat-assistant">
        <div className="chat-assistant__container">
            <ChatAssistantHeader />
            <ChatAssistantBody />
            <ChatAssistantFooter />
        </div>
    </div>
  )
}

export default ChatAssistant