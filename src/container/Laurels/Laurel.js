import React from 'react'

import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './laurel.css'

const AwardCard = ({award: { imgUrl, title, subtitle} }) => {
  return(
    <div className='app_laurels_awards_card'>
      <img src={imgUrl} alt='awards'/>
      <div className='app_laurels_awards_card_content'>
        <p className='p__cormorant' style={{color: '#dcca87'}}>{title}</p>
        <p className='p__cormorant'>{subtitle}</p>
      </div>
    </div>
  )
}

const Laurel = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      
      <div className='app__wrapper_info'>
         <SubHeading title='Awardes & recognition'/>
         <h1 className='headtext__cormorant'>Our Laurels</h1>
         
         <div className='app_laurels_awards'>
          {data.awards.map(
            (award) => <AwardCard award={award} key={award.title}/>
            )}
         </div>
      </div>

      <div className='app__wrapper_img'>
         <img src={images.laurels} alt='laurels_image' />
      </div>

    </div>
  )
}

export default Laurel
