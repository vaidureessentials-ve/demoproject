import "./Customization.css";

export default function Fragrance() {
  return (
    <section className="custom-page">

      {/* HERO */}
      <div className="custom-hero">
        <span className="custom-tag">CUSTOMIZATION</span>
        <h1>Fragrance</h1>
        <p>
          Signature fragrances crafted to define identity, emotion, and memory.
        </p>
      </div>

      {/* SECTION 1 — TEXT LEFT | IMAGE RIGHT */}
      <div className="custom-row">
        <div className="custom-text">
          <h3>Signature Scents</h3>
          <p>
            We create bespoke fragrance profiles that become an extension of
            your brand identity. Each scent is thoughtfully developed to evoke
            emotion, elevate spaces, and leave a lasting impression on guests.
          </p>
        </div>

        <div className="custom-image">
          <img
            src="/images/fragrance-signature.jpg"
            alt="Signature fragrance creation"
          />
        </div>
      </div>

      {/* SECTION 2 — IMAGE LEFT | TEXT RIGHT */}
      <div className="custom-row">
        <div className="custom-image">
          <img
            src="/images/fragrance-natural.jpg"
            alt="Natural and safe fragrances"
          />
        </div>

        <div className="custom-text">
          <h3>Natural & Safe Formulations</h3>
          <p>
            All fragrances are IFRA-compliant, allergen-conscious, and
            responsibly sourced. We balance safety, sustainability, and sensory
            richness to ensure comfort for everyday use.
          </p>
        </div>
      </div>

      {/* SECTION 3 — TEXT LEFT | IMAGE RIGHT */}
      <div className="custom-row">
        <div className="custom-text">
          <h3>Long-Lasting Impact</h3>
          <p>
            Our expertly balanced compositions ensure fragrance consistency and
            longevity across all products—creating a refined experience that
            lingers long after use.
          </p>
        </div>

        <div className="custom-image">
          <img
            src="/images/fragrance-lasting.jpg"
            alt="Long lasting fragrance impact"
          />
        </div>
      </div>

    </section>
  );
}
