import React from 'react';
import image from '../Logo/DevIcon.jpg'

const Logo = () => {
  return (
    <div className='logo ma3 mt0' style={{display:'flex', justifyContent:'flex-start'}}>
        <img className='' style= {{width:'80px', height:'80px'}} src={image} alt='logo'/>
    </div>
  )
}

export default Logo