import "./ContactPages.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="subtitle">
          Get in touch with us for inquiries, support, or business collaboration.
        </p>

        <div className="contact-card">

          <p>
            <FiMail className="contact-icon" />
            <strong>Email:</strong>{" "}
            <a 
            className="color"
            href="mailto:vaidureessentials@gmail.com">vaidureessentials@gmail.com</a>
          </p>

          <p>
            <FiPhone className="contact-icon" />
            <strong>Phone:</strong>{" "}
            <a
            className="color"
            href="tel:+919522700027">+91 95227 00027</a>
          </p>

          <p>
            <FaWhatsapp className="contact-icon whatsapp" />
            <strong>WhatsApp:</strong>{" "}
            <a
            className="color"
              href="https://wa.me/919522700027"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>

        </div>

        <p className="contact-note">
          Our team is available Monday to Friday, 9 AM – 6 PM, to assist you with
          all your needs.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
