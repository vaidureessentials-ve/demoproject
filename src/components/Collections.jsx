import "./Collections.css";
import wetImg from "../assets/wet.jpg";
import dryImg from "../assets/dry.jpg";
import bodyImg from "../assets/body.jpg";
import { Link } from "react-router-dom";

export default function Collections() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="collections">
      <p className="collections-tag">OUR COLLECTIONS</p>
      <h2 className="collections-title">Crafted for Excellence</h2>

      <div className="collections-grid full-width-img">
        {/* Wet Amenities → Hair Care */}
        <Link
          to="/hair-care"
          onClick={scrollToTop}
          className="collection-link"
        >
          <div
            className="collection-card"
            style={{ backgroundImage: `url(${wetImg})` }}
          >
            <div className="overlay">
              <h3>Wet Amenities</h3>
              <p>Premium shampoos, conditioners, and body care</p>
              <span>VIEW COLLECTION →</span>
            </div>
          </div>
        </Link>

        {/* Dry Amenities → Hotel */}
        <Link
          to="/b2b-hotels"
          onClick={scrollToTop}
          className="collection-link"
        >
          <div
            className="collection-card full-width-img"
            style={{ backgroundImage: `url(${dryImg})` }}
          >
            <div className="overlay">
              <h3>Dry Amenities</h3>
              <p>Complete guest care kits for hotels</p>
              <span>VIEW COLLECTION →</span>
            </div>
          </div>
        </Link>

        {/* Body Care → Body Care page */}
        <Link
          to="/body-care"
          onClick={scrollToTop}
          className="collection-link"
        >
          <div
            className="collection-card full-width-img"
            style={{ backgroundImage: `url(${bodyImg})` }}
          >
            <div className="overlay">
              <h3>Body Care</h3>
              <p>Luxury personal care collection</p>
              <span>VIEW COLLECTION →</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
