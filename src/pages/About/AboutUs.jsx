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
            Blending refined aesthetics with sensorial formulations, VAIDURE transforms daily 
            cleansing into moments of calm, confidence, and understated luxury. Every product is 
            designed with precision, elegance, and a deep respect for modern self-care.
          </p>
          <p>
            Created to serve the evolving needs of hotels, resorts, serviced apartments, and restaurants 
            across India, VAIDURE delivers high-quality, reliable, and cost-effective personal care solutions
            that elevate guest experience while helping hospitality partners control costs, reduce wastage, and simplify operations.
          </p>
          <p>
            In a market divided between expensive luxury brands and inconsistent low-cost suppliers, VAIDURE stands at the intersection 
            of quality, value, and consistency—offering hospitality-ready products that feel premium, perform reliably, and reflect thoughtful design.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Do</h2>
          <p>We design, manufacture, and supply daily-use hospitality toiletries, including:</p>

          <ul className="product-list">
            <li>Shampoo</li>
            <li>Shower Gel</li>
            <li>Conditioner</li>
            <li>Hand Wash</li>
            <li>Lotion</li>
          </ul>

          <p>Our products are available in miniature bottles for short stays and refill-based 
            dispenser systems for long-term, high-occupancy hotels, giving properties the
             flexibility to choose what works best for their operations.</p>
        </div>

        <div className="about-section">
          <h2>Our Commitment to Sustainability-</h2>
          <p>Vaidure is committed to responsible hospitality practices:</p>

          <ul className="product-list">
            <li>Refillable systems reduce single-use plastic waste</li>
            <li>Dispensers made using recycled plastic materials</li>
            <li>Bulk refill formats reduce packaging and logistics impact</li>
          </ul>

          <p>We believe sustainability should be practical, affordable, and scalable—not a premium luxury.</p>
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
        

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="product-list">
            <li>Consistency – Same quality, every order</li>
            <li>Transparency – Clear pricing, no surprises</li>
            <li>Reliability – On-time supply, dependable support</li>
            <li>Partnership – Growing together with our hotel clients</li>
          </ul>
        </div>

       <div className="about-section">
          <h2>Our Vision</h2>
          <p>To become a trusted hospitality amenity partner for 10,000+ mid-segment hotels in India, known for:</p>

          <ul className="product-list">
            <li>Reliable supply</li>
            <li>Honest pricing</li>
            <li>Strong after-sales support</li>
            <li>Long-term partnerships</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutVaidure;
