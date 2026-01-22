
import "./Sustainability.css";

const RefillProgram = () => {
  return (
    <section className="sustain-page">
      <div className="sustain-container">

        {/* HEADER */}
        <div className="sustain-header">
          <h1>Refill Program</h1>
          <p>Reducing waste through smart, scalable refill solutions.</p>
        </div>

        {/* SECTION 1 — IMAGE LEFT | TEXT RIGHT */}
        <div className="sustain-row">
          <div className="sustain-image">
            <img src="/images/refill1.jpg" alt="Bulk refill" />
          </div>

          <div className="sustain-text">
            <span className="sustain-tag">OUR COLLECTIONS</span>
            <h3>Bulk Refill Solutions</h3>
            <p>
              VAIDURE’s refill program offers bulk refill packs and large-format
              containers designed for hotels, resorts, offices, and institutional
              environments—ensuring efficiency without compromising quality.
            </p>
          </div>
        </div>

        {/* SECTION 2 — TEXT LEFT | IMAGE RIGHT */}
        <div className="sustain-row">
          <div className="sustain-text">
            <span className="sustain-tag">OUR PRODUCTS</span>
            <h3>Lower Packaging Waste</h3>
            <p>
              By minimizing single-use containers, our refill systems significantly
              reduce plastic waste and overall packaging footprint—supporting
              responsible consumption and cleaner operations.
            </p>
          </div>

          <div className="sustain-image">
            <img src="/images/refill1.jpg" alt="Reduced waste" />
          </div>
        </div>

        {/* SECTION 3 — IMAGE LEFT | TEXT RIGHT */}
        <div className="sustain-row">
          <div className="sustain-image">
            <img src="/images/refill1.jpg" alt="Bulk refill" />
          </div>

          <div className="sustain-text">
            <span className="sustain-tag">OUR COLLECTIONS</span>
            <h3>Cost-Efficient & Sustainable</h3>
            <p>
              Refill programs offer a long-term, cost-effective 
              solution that balances sustainability with operational 
              efficiency—making them ideal for high-usage hospitality environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RefillProgram;
