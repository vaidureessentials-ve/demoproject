import "./B2B.css";
import { FiHeart } from "react-icons/fi";

const resortProducts = [
  {
    id: 1,
    title: "Spa & Wellness Range",
    desc: "Relaxing formulations for spa therapies.",
    img: "/images/resort-spa.jpg",
    price: 1799,
    mrp: 2199,
  },
  {
    id: 2,
    title: "Eco-Friendly Options",
    desc: "Sustainable packaging and gentle ingredients.",
    img: "/images/resort-eco.jpg",
    price: 1499,
    mrp: 1899,
  },
  {
    id: 1,
    title: "Spa & Wellness Range",
    desc: "Relaxing formulations for spa therapies.",
    img: "/images/resort-spa.jpg",
    price: 1799,
    mrp: 2199,
  },
  {
    id: 2,
    title: "Eco-Friendly Options",
    desc: "Sustainable packaging and gentle ingredients.",
    img: "/images/resort-eco.jpg",
    price: 1499,
    mrp: 1899,
  },
  {
    id: 1,
    title: "Spa & Wellness Range",
    desc: "Relaxing formulations for spa therapies.",
    img: "/images/resort-spa.jpg",
    price: 1799,
    mrp: 2199,
  },
  {
    id: 2,
    title: "Eco-Friendly Options",
    desc: "Sustainable packaging and gentle ingredients.",
    img: "/images/resort-eco.jpg",
    price: 1499,
    mrp: 1899,
  },
  {
    id: 1,
    title: "Spa & Wellness Range",
    desc: "Relaxing formulations for spa therapies.",
    img: "/images/resort-spa.jpg",
    price: 1799,
    mrp: 2199,
  },
  {
    id: 2,
    title: "Eco-Friendly Options",
    desc: "Sustainable packaging and gentle ingredients.",
    img: "/images/resort-eco.jpg",
    price: 1499,
    mrp: 1899,
  },
  {
    id: 1,
    title: "Spa & Wellness Range",
    desc: "Relaxing formulations for spa therapies.",
    img: "/images/resort-spa.jpg",
    price: 1799,
    mrp: 2199,
  },
  {
    id: 2,
    title: "Eco-Friendly Options",
    desc: "Sustainable packaging and gentle ingredients.",
    img: "/images/resort-eco.jpg",
    price: 1499,
    mrp: 1899,
  },
  {
    id: 1,
    title: "Spa & Wellness Range",
    desc: "Relaxing formulations for spa therapies.",
    img: "/images/resort-spa.jpg",
    price: 1799,
    mrp: 2199,
  },
  {
    id: 2,
    title: "Eco-Friendly Options",
    desc: "Sustainable packaging and gentle ingredients.",
    img: "/images/resort-eco.jpg",
    price: 1499,
    mrp: 1899,
  },
];

export default function Resorts() {
  return (
    <section className="b2b-page">
      <div className="b2b-container">

        <div className="b2b-header">
          <h1>Resorts</h1>
          <p>Nature-inspired care products for premium resorts.</p>
        </div>

        <div className="b2b-grid">
          {resortProducts.map(item => (
            <div className="b2b-card" key={item.id}>

              <button className="wishlist-btn">
                <FiHeart />
              </button>

              <img src={item.img} alt={item.title} />

              <div className="b2b-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="price-row">
                  <span className="price">₹{item.price}</span>
                  <span className="mrp">₹{item.mrp}</span>
                  <span className="off">
                    {Math.round(((item.mrp - item.price) / item.mrp) * 100)}% off
                  </span>
                </div>

                <button className="add-cart">ADD TO CART</button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
