import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-col brand">
          <h2 className="brand-name">VAIDURE</h2>
          <p>
            Pure Care. Thoughtfully Crafted. <br />
            Beautifully Branded.
          </p>
          <div className="social-icons">
  <a
    href="https://www.instagram.com/vaidure_essentials"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/vaidureessentials"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.youtube.com/@vaidureessentials"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://www.linkedin.com/in/vaidure-essentials-52a1923a5"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
</div>

        </div>

        {/* Products */}
        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <ul>
            <li>
  <Link to="/hair-care" onClick={() => window.scrollTo(0, 0)}>
    Wet Amenities
  </Link>
</li>

<li>
  <Link to="/b2b-hotels" onClick={() => window.scrollTo(0, 0)}>
    Dry Amenities
  </Link>
</li>

<li>
  <Link to="/body-care" onClick={() => window.scrollTo(0, 0)}>
    Body Care Collection
  </Link>
</li>

<li>
  <Link to="/private-label" onClick={() => window.scrollTo(0, 0)}>
    Customization
  </Link>
</li>

          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>COMPANY</h4>
          <ul>
            <li>
  <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
    About Us
  </Link>
</li>

<li>
  <Link to="/eco-materials" onClick={() => window.scrollTo(0, 0)}>
    Sustainability
  </Link>
</li>

<li>
  <Link to="/b2b-hotels" onClick={() => window.scrollTo(0, 0)}>
    B2B Solutions
  </Link>
</li>

<li>
  <Link to="/contactus" onClick={() => window.scrollTo(0, 0)}>
    ContactUs
  </Link>
</li>

          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>support@vaidure.com</li>
            <li>+91 95227 00027</li>
            <li>
              Orbit,Vijay Nagar, Scheme 54 PU4<br />
              Indore, Madhya Pradesh 452010
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 VAIDURE. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}