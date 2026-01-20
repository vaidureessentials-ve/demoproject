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
    <section className="products-page">
          <div className="product-header">
            <h1>Resorts</h1>
            <p>Nature-inspired care products for premium resorts.</p>
          </div>
    
          <div className="products-grid">
            {resortProducts.map((item) => (
              <div className="product-card" key={item.id}>
    
                {/* Wishlist */}
                <button className="wishlist-btn">
                  <FiHeart />
                </button>
    
                {/* Image */}
                <img src={item.img} alt={item.name} />
    
                {/* Content */}
                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p className="desc">{item.desc}</p>
    
                  {/* Price */}
                  <div className="price-row">
                    <span className="price">₹{item.price}</span>
                    <span className="mrp">₹{item.mrp}</span>
                    <span className="off">
                      {Math.round(((item.mrp - item.price) / item.mrp) * 100)}% off
                    </span>
                  </div>
    
                  {/* Button */}
                  <button className="add-cart">ADD TO CART</button>
                </div>
    
              </div>
            ))}
          </div>
        </section>
  );
}
