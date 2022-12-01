import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';

import { TbBrandWhatsapp } from 'react-icons/tb';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_b1uw7i8',
        'template_bnszlxg',
        form.current,
        'BWEN-GMmk3V90-g2t'
      )

      .then(
        (result) => {
          console.log(result.text);
          alert('Message send! thank you!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Error!');
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TbBrandWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>050-9773977</h5>
            <a
              href="https://wa.me/+972509773977"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Daniel@danielevi.co.il</h5>
            <a
              href="mailto:daniel@danielevi.co.il"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            className="textarea_font"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
