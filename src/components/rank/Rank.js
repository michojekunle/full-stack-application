import React from 'react'

const Rank = ( {username} ) => {
  return (
    <div >
      <div className='white f3 center flex-column'>Hey {username}, your current rank is</div>
      <div className='white mt3 f1 center flex-column'>0</div>
    </div>
  )
}

export default Rank