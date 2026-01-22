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
          <h3>Aloevera & Neem</h3>
          <p>
            A refreshing and purifying blend, Aloe Vera and Neem combines the soothing 
            hydration of aloe with the natural cleansing power of neem. Known for their 
            calming and antibacterial properties, this duo gently cleanses, nourishes, 
            and protects the skin, leaving it fresh, balanced, and revitalized—ideal 
            for everyday care and hygienic hospitality use.
          </p>
        </div>

        <div className="custom-image">
          <img
            src="/images/fragrance-aloeveraneem.jpg"
            alt="aloe vera neem"
          />
        </div>
      </div>

      {/* SECTION 2 — IMAGE LEFT | TEXT RIGHT */}
      <div className="custom-row">
        <div className="custom-image">
          <img
            src="/images/fragrance-oudhmusk.jpg"
            alt="oudh & musk"
          />
        </div>

        <div className="custom-text">
          <h3>Oudh & Musk</h3>
          <p>
            A rich and timeless blend, Oudh and Musk brings together the deep, 
            woody warmth of rare oudh with the soft, sensual depth of musk. 
            The fragrance opens with an earthy, resinous character and settles 
            into a smooth, comforting base that feels elegant and enduring. 
            Sophisticated yet calming, it creates a sense of quiet luxury—perfect 
            for refined personal care experiences and premium hospitality spaces.
          </p>
        </div>
      </div>

      {/* SECTION 3 — TEXT LEFT | IMAGE RIGHT */}
      <div className="custom-row">
        <div className="custom-text">
          <h3>Peach & Beary</h3>
          <p>
            A vibrant and uplifting blend, Peach and Berry combines
            the juicy sweetness of ripe peach with the fresh, slightly 
            tangy notes of berries. Light, fruity, and refreshing, this 
            fragrance delivers a cheerful burst of freshness that feels 
            soft on the senses and leaves a pleasant, long-lasting 
            impression—perfect for modern, feel-good personal care.
          </p>
        </div>

        <div className="custom-image">
          <img
            src="/images/fragrance-peachbeary.jpg"
            alt="peach beary"
          />
        </div>
      </div>

    </section>
  );
}
