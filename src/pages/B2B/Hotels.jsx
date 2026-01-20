import "./B2B.css";
import { FiHeart } from "react-icons/fi";

const hotelProducts = [
  {
    id: 1,
    name: "Guest Room Amenities",
    desc: "Shampoo, conditioner, body wash and lotions.",
    img: "/images/hotel1.png",
    price: 1299,
    mrp: 1599,
  },
  {
    id: 2,
    name: "Bathroom Essentials",
    desc: "Complete bath care range for luxury hotels.",
    img: "/images/hotel2.png",
    price: 999,
    mrp: 1299,
  },
  {
    id: 3,
    name: "Custom Branding",
    desc: "Private label solutions aligned with hotel branding.",
    img: "/images/hotel3.png",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 4,
    name: "Custom Branding",
    desc: "Private label solutions aligned with hotel branding.",
    img: "/images/hotel4.png",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 5,
    name: "Guest Room Amenities",
    desc: "Shampoo, conditioner, body wash and lotions.",
    img: "/images/hotel5.png",
    price: 1299,
    mrp: 1599,
  },
  {
    id: 6,
    name: "Bathroom Essentials",
    desc: "Complete bath care range for luxury hotels.",
    img: "/images/hotel6.png",
    price: 999,
    mrp: 1299,
  },
  {
    id: 7,
    name: "Custom Branding",
    desc: "Private label solutions aligned with hotel branding.",
    img: "/images/hotel7.png",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 8,
    name: "Custom Branding",
    desc: "Private label solutions aligned with hotel branding.",
    img: "/images/hotel8.png",
    price: 2499,
    mrp: 2999,
  },
];

export default function Hotels() {
  return (
    <section className="products-page">
      <div className="product-header">
        <h1>Hotels</h1>
        <p>Premium personal care solutions for Indian hospitality.</p>
      </div>

      <div className="products-grid">
        {hotelProducts.map((item) => (
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
