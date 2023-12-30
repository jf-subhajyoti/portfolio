import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Contacts.css';

const Contacts = () => {

  const form = useRef();
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);

  const alertConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }

  const sendEmail = (e) => {
    setDisableSubmitBtn(true);
    e.preventDefault();

    emailjs.sendForm('service_w1s4w6j', 'template_3vjeukb', form.current, 'F0mSwZd1O1qcDN_o1')
    .then(() => {
      toast.success('Email sent succesfully!!' , alertConfig);
      form.current.reset();
      setDisableSubmitBtn(false);
    }, (error) => {
      toast.error(error.text, alertConfig);
      setDisableSubmitBtn(false);
    });
  };
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' className='from__input user' placeholder='Name' />
          <input type="email" name='user_email' className='from__input email' placeholder='Email' />
          <textarea name="message" className='from__input from__textarea' placeholder='Message'></textarea>
          <input disabled={disableSubmitBtn} type="submit" value="Send" className={disableSubmitBtn ? 'button disabled' : 'button'} placeholder='Name' />
        </form>
        <div className="blur"></div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contacts
