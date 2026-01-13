import { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Komal Kapoor Grover",
    text: "This fragrance collection is an absolute gem! The Marigold and Turmeric combo is like a nostalgic trip back to the best wedding vibes.",
    img: "/testimonials/komal.jpg"
  },
  {
    name: "Simran Sethi Bedi",
    text: "A beautiful blend that feels premium and emotional. It truly elevates gifting experiences.",
    img: "/testimonials/simran.jpg"
  },
  {
    name: "Piyush Manwani",
    text: "An unforgettable fragrance. Perfect for luxury hospitality and events.",
    img: "/testimonials/piyush.jpg"
  },
  {
    name: "Harshita Roopchandani",
    text: "Elegant, subtle, and deeply memorable. Highly recommended.",
    img: "/testimonials/harshita.jpg"
  },
  {
    name: "Kashish Ratnani",
    text: "Timeless fragrances that feel personal and premium.",
    img: "/testimonials/kashish.jpg"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials">
      <h3 className="testi-title">TESTIMONIALS</h3>

      <div className="stars">★★★★★</div>

      <p className="testi-quote">
        “{testimonials[active].text}”
      </p>

      <div className="avatars">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`avatar ${index === active ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>

      <p className="testi-name">{testimonials[active].name}</p>
    </section>
  );
}
