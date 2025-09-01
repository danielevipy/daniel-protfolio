import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandWhatsapp } from "react-icons/tb";
import { confirmAlert } from "react-confirm-alert";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const contactPopup = (name) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="popup">
          <h2>
            Message Sent Successfully!
            <span role="img" aria-label="check">
              ✅
            </span>
          </h2>
          <h3>
            Thank you, <b>{name}</b>, for reaching out!
            <span role="img" aria-label="smile">
              🙂
            </span>
          </h3>
          <p>
            I have received your message and will contact you as soon as
            possible.
          </p>
          <p>
            In the meantime, feel free to check my{" "}
            <a
              href="https://www.linkedin.com/in/danielevipy/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1a73e8", textDecoration: "underline" }}
            >
              LinkedIn profile.
            </a>
          </p>
          <button
            style={{ margin: "0.5rem" }}
            className="btn btn-primary"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      ),
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const userName = e.target.name.value; // get the name from the form

    emailjs
      .sendForm(
        "service_b1uw7i8",
        "template_bnszlxg",
        form.current,
        "pb2GXW_EUL2bD2RZw"
      )
      .then(
        (result) => {
          console.log(result.text);
          contactPopup(userName); // pass the name here
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message!");
          setLoading(false);
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

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            className="textarea_font"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
