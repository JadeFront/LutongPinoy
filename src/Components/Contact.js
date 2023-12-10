import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
        <div className='contact-intro'>
            <h1>Get in Touch</h1>
            <h4>Request Filipino Recipe</h4>

            <div className='contact-info'>
                <input className='name' type='text' placeholder='Enter your name' />
                <input className='email' type='email'placeholder='Enter your mail'/>
                
                <textarea className='message' type='text'placeholder='Write your request here...'/>
                
                <button className='send-button'>Send</button>
            </div>
            
        </div>
    </div>
  )
}

export default Contact