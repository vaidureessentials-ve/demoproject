import "./Sustainability.css";

const Certifications = () => {
  return (
    <section className="sustain-page">
      <div className="sustain-container">

        {/* HEADER */}
        <div className="sustain-header">
          <h1>Certifications</h1>
          <p>
            Compliance, quality, and responsibility at every stage of production.
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="certification-wrapper">

          <div className="certification-block">
            <h3>Quality Compliance</h3>
            <p>
              Our manufacturing processes are aligned with applicable Indian
              cosmetic and personal care regulations. Each product is developed
              under controlled conditions to ensure consistency, quality, and
              regulatory adherence.
            </p>
          </div>

          <hr />

          <div className="certification-block">
            <h3>Safety & Hygiene Standards</h3>
            <p>
              Safety is central to everything we create. Our products are
              formulated with stability, skin compatibility, and hygienic
              packaging in mind—ensuring safe everyday use across hospitality
              and lifestyle environments.
            </p>
          </div>

          <hr />

          <div className="certification-block">
            <h3>Ethical Practices</h3>
            <p>
              We are committed to ethical sourcing, responsible manufacturing,
              and transparent business practices within India—supporting
              long-term sustainability and trust with our partners.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certifications;
