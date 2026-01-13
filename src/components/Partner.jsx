import "./Partner.css";
import { Link } from "react-router-dom";

export default function Partner() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="partner">
      <div className="partner-content">
        <p className="partner-tag">PARTNER WITH US</p>

        <h2>
          Transform Your Guest <br /> Experience
        </h2>

        <p className="partner-desc">
          Whether you manage a boutique hotel or a multinational chain,
          Vaidure transforms everyday amenities into branded experiences.
        </p>

        <div className="partner-buttons">
          <button className="btn-primary">Request B2B Quote</button>

          <Link to="/private-label" onClick={scrollToTop}>
            <button className="btn-secondary">
              Explore Customization
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
