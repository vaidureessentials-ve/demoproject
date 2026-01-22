import "./Sustainability.css";

const EcoMaterials = () => {
  return (
    <section className="sustain-page">
      <div className="sustain-container">

        {/* HEADER */}
        <div className="sustain-header">
          <h1>Eco Materials</h1>
          <p>Responsible material choices for everyday personal care.</p>
        </div>

        {/* ROW 1: TEXT LEFT | IMAGE RIGHT */}
        <div className="sustain-row">
          <div className="sustain-text">
            <h3>Plant-Based Ingredients</h3>
            <p>
              We prioritize naturally derived ingredients sourced responsibly,
              ensuring safety, performance, and suitability for sensitive skin
              while respecting environmental balance.
            </p>
          </div>

          <div className="sustain-image">
            <img src="/images/plant-based.jpg" alt="Plant based ingredients" />
          </div>
        </div>

        {/* ROW 2: IMAGE LEFT | TEXT RIGHT */}
        <div className="sustain-row reverse">
          <div className="sustain-image">
            <img src="/images/reduced-plastic.jpg" alt="Reduced plastic packaging" />
          </div>

          <div className="sustain-text">
            <h3>Reduced Plastic Use</h3>
            <p>
              Our packaging is designed to minimize plastic usage while
              maintaining durability, hygiene, and a refined premium finish
              suitable for hospitality environments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcoMaterials;
