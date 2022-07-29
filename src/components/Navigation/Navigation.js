import React from 'react'

const Navigation = ({onSignIn}) => {
  return (
        <nav style={{display: 'flex', justifyContent: 'flex-end' }}>
            <p onClick={onSignIn} className='f3 pa3 dim black pointer link underline'>Sign Out</p>
        </nav>
  )
}

export default Navigation