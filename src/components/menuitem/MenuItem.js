import React from 'react'
import './menuitem.css'

const MenuItem = ({title, price, tags}) => {
  return (
    <div className='app_menuitem'>
      
       <div className='app_menuitem_head'>
       
        <div className='app_menuitem_name'>
          <p className='p__cormorant' style={{ color: '#dcca87' }}>{title}</p>
        </div>

        <div className='app_menuitem_dash' />

        <div className='app_menuitem_price'>
          <p className='p__cormorant' >{price}</p>
        </div>

       </div>
       
       <div className='app_menuitem_sub'>
         <p className='p__opensans' style={{ color:'#aaa' }}>{tags}</p>
       </div>

    </div>
  )
}

export default MenuItem
