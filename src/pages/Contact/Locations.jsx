import "./ContactPages.css";

const Locations = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Locations</h1>
        <p className="subtitle">
          Our operations and presence across India.
        </p>

        <div className="location-list">

          {/* Head Office */}
          <div className="location-card">
            <h3>Head Office</h3>
            <p>Indore, Madhya Pradesh</p>
          </div>

          {/* Orbit Location */}
          <div className="location-card">
            <h3>Corporate Office</h3>
            <p>
              At Orbit, Vijay Nagar, Scheme 54 PU4,<br />
              Indore, Madhya Pradesh 452010
            </p>

            {/* Google Map */}
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470344.48839997954!2d75.50715125625001!3d22.929361716332927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd541f35f9ff%3A0xe646e306c7f5e4f0!2sOrbit%20Mall%2C%20At%20Orbit%2C%20Vijay%20Nagar%2C%20Scheme%2054%20PU4%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1767932263889!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orbit Indore Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;
