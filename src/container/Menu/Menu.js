import React from 'react'

import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './menu.css'

const Menu = () => {
  return (
    <div className="app_specialMenu flex__center section__padding" id="menu">
       
       <div className="app_specialMenu_title">
         <SubHeading title="Menu that fits your palatte" />
         <h1 className="headtext__cormorant">Today&apos;s Special</h1>
       </div>

       <div className="app_specialMenu_menu">
         
          <div className='app_specialMenu_menu_wine flex_center'>
            <p className='app_specialMenu_menu_heading'>Wine & Beer</p>
            <div className='app_specialMenu_menu_items'>
              {data.wines.map(
                (wine, index) => (
                  <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
                )
              )}
            </div>
          </div>

          <div className='app_specialMenu_menu_img'>
             <img src={images.menu} alt='menu_img' />
          </div>
          
          <div className="app_specialMenu_menu_cocktails  flex__center">
             <p className="app_specialMenu_menu_heading">Cocktails</p>
             <div className="app_specialMenu_menu_items">
                {data.cocktails.map(
                  (cocktail, index) => (
                 <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                  )
                 )}
             </div>
          </div>
       </div>

       <div style={{ marginTop: 15 }}>
         <button type='button' className='custom__button'>View More</button>
       </div>

    </div>
  )
}

export default Menu;
