import React from 'react'
import './LinkForm.css'

const LinkForm= () => {
  return (
    <div>
      <p className="dark-blue f3">Let's see how many Links / Images you can Submit</p>
      <div className='form center pa4 shadow-5 br3'>
        <input className='w-70 pa2' type="text" placeholder='Enter Your Link..'/> 
        <button className='bg-light-purple white pointer w-30 link grow ph4 pv2'>Submit</button>
      </div>
    </div>
  )
}

export default LinkForm