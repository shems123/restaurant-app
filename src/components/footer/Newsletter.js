import React from 'react'

import './newsletter.css'
import  SubHeading  from '../subheading/SubHeading'

const Newsletter = () => {
  return (
    <div className='app_newsletter'>
      
      <div className='app_newsletter_heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      
      <div className="app_newsletter_input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">Subscribe</button>
      </div>

    </div>
  )
}

export default Newsletter;
