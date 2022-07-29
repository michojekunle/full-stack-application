import React from 'react'
import './LinkForm.css';
import { useState } from 'react';

const LinkForm= () => {
  const [input, setInput] = useState('');
  const [submittedLink, setSubmittedLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }
  
  const handleBtnSubmit = () => {
    console.log('click');
    setSubmittedLink(input);
    setSubmitted(true);
  }

  return (
    <div>
      <p className="dark-blue f3 center flex-column">Let's see how many Links / Images you can Submit</p>
      <div className='form center pa4 shadow-5 br3'>
        <input className='w-70 pa2' type="text" placeholder='Enter Your Link..' onChange={handleInputChange}/> 
        <button className='bg-light-purple white pointer w-30 link grow ph4 pv2' onClick={handleBtnSubmit}>Submit</button>
      </div>
      {submitted && <p className='white f3'>This is your Link: {submittedLink}</p>}
      
    </div>
  )
}

export default LinkForm