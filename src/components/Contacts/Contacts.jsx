import React from 'react';

import './Contacts.css';

const Contacts = () => {
  return (
    <div className='contact__wrapper'>
      <div className="contact__wrapper--left">
        <div className="contact__title">
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>
        <div className='blur'></div>
      </div>
      <div className="contact__wrapper--right">
        <form>
          <input type="text" name='user_name' className='from__input user' placeholder='Name' />
          <input type="email" name='user_email' className='from__input email' placeholder='Email' />
          <textarea name="message" className='from__input from__textarea' placeholder='Message'></textarea>
          <input type="submit" value="Send" className='button' placeholder='Name' />
        </form>
        <div className="blur"></div>
      </div>
    </div>
  )
}

export default Contacts
