import "./Difference.css";
import {
  FiDroplet,
  FiFeather,
  FiAward,
  FiTag
} from "react-icons/fi";


export default function Difference() {
  return (
    <section className="difference">
      <div className="difference-left">
        <p className="difference-tag">WHY VAIDURE</p>
        <h2>The Fi Difference</h2>
        <p className="difference-desc">
          We blend clean formulations, custom branding, and global aesthetics
          to deliver refined experiences across B2B and B2C markets.
        </p>
        <span className="divider"></span>
      </div>

      <div className="difference-right">
        <div className="feature">
          <FiDroplet className="feature-icon" />
          <h4>Water-Based Formulas</h4>
          <p>
            Gentle, preservative-free formulations safe for daily use.
          </p>
        </div>

        <div className="feature">
          <FiFeather className="feature-icon" />
          <h4>Clean Ingredients</h4>
          <p>
            No harsh chemicals. Just pure, natural care for your skin.
          </p>
        </div>

        <div className="feature">
          <FiAward className="feature-icon" />
          <h4>Premium Quality</h4>
          <p>
            International hospitality standards in every product.
          </p>
        </div>

        <div className="feature">
          <FiTag className="feature-icon" />
          <h4>Custom Branding</h4>
          <p>
            Tailored solutions that reflect your brand identity.
          </p>
        </div>
      </div>
    </section>
  );
}
