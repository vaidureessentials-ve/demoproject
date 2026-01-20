import "./AboutPages.css";

const AboutVaidure = () => {
  return (
    <section className="about-page">
      <div className="about-container">

        {/* BRAND INTRO */}
        <div className="brand-hero">
          <h1>VAIDURE</h1>
          <p className="brand-tagline">Where Luxury Meets Ritual.</p>
        </div>

        {/* ABOUT */}
        <div className="about-section">
          <h2>About VAIDURE</h2>
          <p>
            VAIDURE is a premium personal care brand crafted for those who believe
            everyday rituals should feel indulgent.
          </p>
          <p>
            Blending refined aesthetics with sensorial formulations, VAIDURE
            transforms daily cleansing into a moment of calm, confidence, and
            luxury.
          </p>
          <p>
            Every product is designed with precision, elegance, and a deep
            respect for modern self-care.
          </p>
        </div>

        {/* COLLECTION */}
        <div className="about-section">
          <h2>The Essentials Collection</h2>
          <p className="section-subtitle">
            A curated range for complete body care
          </p>

          <ul className="product-list">
            <li>Luxury Shower Gel</li>
            <li>Nourishing Shampoo</li>
            <li>Silkening Conditioner</li>
            <li>Hydrating Body Lotion</li>
            <li>Gentle Hand Wash</li>
          </ul>

          <p>
            Each product is thoughtfully formulated to cleanse, nourish, and
            elevate your daily routine.
          </p>
        </div>

        {/* WHY VAIDURE */}
        <div className="about-section highlight">
          <h2>Why VAIDURE</h2>
          <ul className="check-list">
            <li>Premium-quality formulations</li>
            <li>Elegant, minimal packaging</li>
            <li>Gold foil detailing & luxury finish</li>
            <li>Designed for modern lifestyles</li>
            <li>Inspired by purity, balance, and refinement</li>
          </ul>

          <p className="bold-note">
            VAIDURE is not just skincare — it’s a statement.
          </p>
        </div>

        {/* DESIGN */}
        <div className="about-section">
          <h2>Design Philosophy</h2>
          <ul className="design-list">
            <li>Matte black & transparent luxury packaging</li>
            <li>Gold foil embossed typography</li>
            <li>Minimal labels with refined detailing</li>
            <li>Aesthetic inspired by water, purity, and calm strength</li>
          </ul>

          <p>
            Every element reflects understated sophistication.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="about-section highlight">
          <h2>Signature Experience</h2>
          <p>From the moment you open a VAIDURE product:</p>

          <ul className="experience-list">
            <li>Rich textures</li>
            <li>Refined fragrances</li>
            <li>A spa-like feel at home</li>
          </ul>

          <p className="bold-note">
            Luxury that lingers beyond the shower.
          </p>
        </div>

        {/* AUDIENCE */}
        <div className="about-section">
          <h2>For Those Who Choose Excellence</h2>
          <p>
            VAIDURE is made for individuals who value quality, elegance, and
            intentional living.
          </p>

          <ul className="audience-list">
            <li>Premium gifting</li>
            <li>Modern homes</li>
            <li>Luxury hospitality</li>
            <li>Conscious consumers</li>
          </ul>
        </div>

        {/* LAUNCH */}
        <div className="launch-box">
          <h2>Launching Soon</h2>
          <p>Experience the future of personal care.</p>

          <div className="launch-brand">
            <h3>VAIDURE</h3>
            <span>Luxury you can feel. Rituals you’ll remember.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutVaidure;
