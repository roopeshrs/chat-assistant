import React from 'react'
import filterImage from '../../../../assets/images/filter.svg'
import closeImage from '../../../../assets/images/close.svg'
import closeActiveImage from '../../../../assets/images/close-active.svg'
import './BotMessage.css';

const BotMessageFilter = () => {
  return (
    <div className='bot-message-filter'>
      <div className='bot-message-filter__heading'>
        <p>Select filters</p>
        <div className='bot-message-filter__icon'>
          <img src={filterImage} alt='Filter Icon' />
          <p>Filter</p>
        </div>
      </div>
      <div className='bot-message-filter__options'>
        <div className='bot-message-filter__option active'>
          <h4>Strap - Long</h4>
          <img src={closeActiveImage} alt='Close Icon' />
        </div>
        <div className='bot-message-filter__option'>
          <h4>Colour</h4>
          <img src={closeImage} alt='Close Icon' />
        </div>
        <div className='bot-message-filter__option'>
          <h4>Size</h4>
          <img src={closeImage} alt='Close Icon' />
        </div>
        <div className='bot-message-filter__option'>
          <h4>Brand</h4>
          <img src={closeImage} alt='Close Icon' />
        </div>
        <div className='bot-message-filter__option'>
          <h4>Material</h4>
          <img src={closeImage} alt='Close Icon' />
        </div>
      </div>
    </div>
  )
}

export default BotMessageFilter