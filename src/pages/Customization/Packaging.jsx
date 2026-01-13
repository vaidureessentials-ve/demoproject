import "./Customization.css";

export default function Packaging() {
  return (
    <section className="custom-page">

      {/* HERO */}
      <div className="custom-hero">
        <span className="custom-tag">CUSTOMIZATION</span>
        <h1>Packaging</h1>
        <p>
          Thoughtfully designed packaging that balances sustainability,
          functionality, and refined aesthetics.
        </p>
      </div>

      {/* SECTION 1 — IMAGE LEFT | TEXT RIGHT */}
      <div className="custom-row">
        <div className="custom-image">
          <img
            src="/images/packaging-sustainable.jpg"
            alt="Sustainable packaging materials"
          />
        </div>

        <div className="custom-text">
          <h3>Sustainable Materials</h3>
          <p>
            Our packaging solutions prioritize recyclable, refill-friendly,
            and responsibly sourced materials—helping brands reduce
            environmental impact while maintaining premium presentation.
          </p>
        </div>
      </div>

      {/* SECTION 2 — TEXT LEFT | IMAGE RIGHT */}
      <div className="custom-row">
        <div className="custom-text">
          <h3>Design Customization</h3>
          <p>
            From bottle shapes and finishes to labeling and color palettes,
            every detail is customizable. We ensure your packaging reflects
            your brand’s identity with clarity, elegance, and distinction.
          </p>
        </div>

        <div className="custom-image">
          <img
            src="/images/packaging-design.jpg"
            alt="Packaging design customization"
          />
        </div>
      </div>

      {/* SECTION 3 — IMAGE LEFT | TEXT RIGHT */}
      <div className="custom-row">
        <div className="custom-image">
          <img
            src="/images/packaging-bulk.jpg"
            alt="Bulk and retail packaging"
          />
        </div>

        <div className="custom-text">
          <h3>Bulk & Retail Ready</h3>
          <p>
            Whether for hotels, resorts, airlines, or retail shelves, our
            packaging is engineered for durability, ease of use, and
            seamless scalability across multiple distribution channels.
          </p>
        </div>
      </div>

    </section>
  );
}
