import './UserMessage.css'

const UserMessage = () => {
  return (
    <div className='user-message'>
      <div className='user-message__text'>
        <h3 className='user-message__message'>
          I am looking for a hand bag, with long strap .
        </h3>
      </div>
      <p className='user-message__timestamp'>4:46 PM</p>
    </div>
  )
}

export default UserMessage