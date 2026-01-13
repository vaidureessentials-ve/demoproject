import "./AboutPages.css";

const Careers = () => {
  return (
    <section className="about-page">
      <div className="about-container">

        <h1>Careers</h1>

        <p className="subtitle">
          Build with purpose. Create with refinement.
        </p>

        <p>
          <b>VAIDURE</b> is a premium personal care brand focused on refined design,
          sensorial formulations, and elevated everyday rituals. We collaborate
          with professionals who value quality, discretion, and excellence.
        </p>

        <p>
          We operate with a small, focused team and partner with specialists
          across design, product development, branding, and operations. Every
          role at VAIDURE contributes directly to the brand’s identity and
          long-term vision.
        </p>

        {/* VALUES */}
        <div className="career-box">
          <h3>Our Values</h3>
          <ul>
            <li>Precision in design and execution</li>
            <li>Respect for craftsmanship and detail</li>
            <li>Commitment to premium quality</li>
            <li>Thoughtful, sustainable decision-making</li>
          </ul>
        </div>

        {/* WORKING STYLE */}
        <div className="career-box">
          <h3>Working at VAIDURE</h3>
          <p>
            We believe luxury is created through intention. Our working
            environment is calm, structured, and focused. We value clarity
            over noise and long-term excellence over short-term trends.
          </p>
        </div>

        {/* CONTACT */}
        <p className="">
          For professional enquiries and career discussions, please write to{" "}
          <strong>careers@vaidure.com</strong>
        </p>

      </div>
    </section>
  );
};

export default Careers;
