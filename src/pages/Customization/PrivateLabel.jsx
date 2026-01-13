import "./Customization.css";

export default function PrivateLabel() {
  return (
    <section className="custom-page">

      {/* HERO */}
      <div className="custom-hero">
        <span className="custom-tag">CUSTOMIZATION</span>
        <h1>Private Label</h1>
        <p>
          Create refined personal care products under your own brand—crafted
          with precision, quality, and distinction.
        </p>
      </div>

      {/* SECTION 1 — IMAGE LEFT | TEXT RIGHT */}
      <div className="custom-row">
        <div className="custom-image">
          <img src="/images/private-brand.jpg" alt="Private label branding" />
        </div>

        <div className="custom-text">
          <h3>Brand Identity</h3>
          <p>
            Build products that carry your brand’s signature. From logo placement
            and color palettes to packaging aesthetics, we help translate your
            vision into a tangible, premium product line.
          </p>
        </div>
      </div>

      {/* SECTION 2 — TEXT LEFT | IMAGE RIGHT */}
      <div className="custom-row">
        <div className="custom-text">
          <h3>Flexible Minimum Order Quantities</h3>
          <p>
            Our adaptable MOQ structure supports boutique hotels, emerging brands,
            and established businesses—allowing you to scale confidently without
            unnecessary inventory pressure.
          </p>
        </div>

        <div className="custom-image">
          <img src="/images/private-moq.jpg" alt="Flexible MOQ" />
        </div>
      </div>

      {/* SECTION 3 — IMAGE LEFT | TEXT RIGHT */}
      <div className="custom-row">
        <div className="custom-image">
          <img src="/images/private-quality.jpg" alt="Quality assurance" />
        </div>

        <div className="custom-text">
          <h3>Uncompromising Quality</h3>
          <p>
            Every formulation is developed with rigorous quality control,
            dermatological testing, and compliance with international standards—
            ensuring products you can trust and proudly offer.
          </p>
        </div>
      </div>

    </section>
  );
}
