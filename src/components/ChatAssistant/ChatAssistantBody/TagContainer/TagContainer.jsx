import './TagContainer.css'
import rightArrowImage from '../../../../assets/images/right-arrow.svg'

const TagContainer = () => {
  return (
    <div className='tag-container'>
      <p className='tag-container__title'>Popular tags for handbag</p>
      <div className='tag-container__tags'>
        <div className='tag-container__tags-list'>
          <h4>Clutch</h4>
          <h4>Fabric lining</h4>
          <h4>Baggit</h4>
          <h4>Multi Compartment</h4>
        </div>
        <div className='tag-container__tags-arrow'>
          <img src={rightArrowImage} alt='Right arrow' />
        </div>
      </div>
    </div>
  )
}

export default TagContainer