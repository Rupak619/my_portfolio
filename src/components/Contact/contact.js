import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import ig from "../../assets/instagram.png";
// import fb from "../../assets/facebook-icon.png";
import linkedin from "../../assets/linkedin.png";
import github from '../../assets/github.png'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    emailjs
      .sendForm(
        "service_ebgavft",
        "template_1m65ihq",
        form.current,
        "v9nQ9NdPY3y_t6Y6V"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Email Sent Successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"></span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
          <a
              href="https://www.linkedin.com/in/rupak-londhe" title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" className="link" />
            </a>
            <a
              href="https://github.com/Rupak619" title="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" className="link" />
            </a>          
            <a
              href="https://www.instagram.com/binary_1_0_/" title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram" className="link" />
            </a>    
            {/* <a
              href="#" title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" className="link" />
            </a>         */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
