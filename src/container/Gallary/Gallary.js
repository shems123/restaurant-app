import React, { useRef } from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'


import { SubHeading } from '../../components'
import { images } from '../../constants'
import './gallary.css'

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallary = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
      const { current } = scrollRef;

      if(direction === 'left'){
        current.scrollLeft -= 300;
      }else{
        current.scrollLeft += 300;
      }
  }

  return (
    <div className='app_gallery flex__center'>
      
      <div className='app_gallery_content'>
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallary</h1>
        <p className='p__opensans' style={{color: '#AAAAAA', marginTop: '2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app_gallery_images'>
        <div className='app_gallery_images_container'>
           {galleryImages.map((image, index) => (
            <div key={`gallery_image _${index + 1}`} className='app_gallery_images_card flex__center'>
              <img src={image} alt='gallery'/>
              <BsInstagram className='gallery_image_icon'/>
            </div>
           ))}
        </div>

        <div className='app_gallery_images_arrow'>
          <BsArrowLeftShort className='gallery_arrow_icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery_arrow_icon' onClick={() => scroll('right')}/>
        </div>

      </div>

    </div>
  )
}

export default Gallary
