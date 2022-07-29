import React from 'react'
import {Link} from 'react-router-dom';


const Navigation = () => {
  return (
        <nav style={{display: 'flex', justifyContent: 'flex-end' }}>
            <Link to='/'><p className='f3 pa3 dim black pointer link underline'>Sign Out</p></Link>
        </nav>
  )
}

export default Navigation