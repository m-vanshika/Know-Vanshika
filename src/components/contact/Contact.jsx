import React,{useRef} from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import emailjs from 'emailjs-com'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm("service_2gb5nre","template_vbwbjce",form.current,'UbO4Wv2bOH2Po8Evu')    
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
   e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className='contact__option'>
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vanshikav.kumar@gmail.com</h5>
            <a href='mailto:vanshikav.kumar@gmail.com' target='_blank'>Mail Now</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>@m-vanshika</h5>
            <a href='https://www.linkedin.com/in/m-vanshika/ 'target='_blank'>Ping Now</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 821 858 1767</h5>
            <a href='https://api.whatsapp.com/send?phone=918218581767' target='_blank'>Message Now</a>
          </article>
        </div>
        {/*<form action='https://formspree.io/f/meqdwlyq' method='POST'>*/}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full name' required/>
        <input type="email" name='name' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>
      </div>
    </section>
  )
}

export default Contact