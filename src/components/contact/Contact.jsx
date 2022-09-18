import React, { useRef, useState } from 'react';
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md"
import emailjs from 'emailjs-com';

const Contact = () => {
  const [displayForm, setDisplayForm] = useState({});

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_umciode', 'template_lr3cvhd', form.current, 'jaJ0jSCp2CDK38LlO');
    setDisplayForm({display: "none"})
    };

  return (
    <section id="contact">
      <h5>Setzen wir uns in Verbindung</h5>
      <h2>Kontakt</h2>

      <div className="container contact__container">
        <div className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>scharnoui@gmail.com</h5>
          <a href="mailto:scharnoui@gmail.com">E-mail senden</a>
        </div>
        {displayForm.display === "none" ? 
        <h3 className='nachricht__erfolg'>Deine Nachricht wurde gesendet!</h3>
         : ""}
        <form ref={form} onSubmit={sendEmail} style={displayForm}>
          <input type="text" name='name' placeholder='Vorname und Name' required />
          <input type="email" name='email' placeholder='Email' />
          <textarea name="message" placeholder='Nachricht'></textarea>
          <button type='submit' className='btn btn-primary'>Senden</button>
        </form>
      </div>
    </section>
  )
}

export default Contact