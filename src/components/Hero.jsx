import "./Hero.css";
import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="tagline">PURE CARE. THOUGHTFULLY CRAFTED.</p>

        <h1>
          Where Purity Meets <br /> Personalization
        </h1>

        <p className="description">
          Premium hotel toiletries and body care solutions designed for modern
          hospitality and conscious consumers.
        </p>

        <div className="buttons">
          <button className="primary">EXPLORE COLLECTION →</button>

          <Link to="/b2b-hotels" onClick={scrollToTop}>
            <button className="secondary">B2B SOLUTIONS</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
