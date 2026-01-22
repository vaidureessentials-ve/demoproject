import "./GiftSets.css";
import { FiHeart } from "react-icons/fi";

import gift1 from "../../assets/gift1.png";
import gift2 from "../../assets/gift2.png";
import gift3 from "../../assets/gift3.png";
import gift4 from "../../assets/gift4.png";

const giftSets = [
  {
    id: 1,
    name: "Luxury Travel Kit",
    img: gift1,
    price: 1499,
    mrp: 1799,
  },
  {
    id: 2,
    name: "Wellness Essentials Box",
    img: gift2,
    price: 1999,
    mrp: 2399,
  },
  {
    id: 3,
    name: "Premium Guest Welcome Set",
    img: gift3,
    price: 2499,
    mrp: 2999,
  },
  {
    id: 4,
    name: "Premium Guest Welcome Set",
    img: gift4,
    price: 2499,
    mrp: 2999,
  },
  {
    id: 5,
    name: "Luxury Travel Kit",
    img: gift1,
    price: 1499,
    mrp: 1799,
  },
  {
    id: 6,
    name: "Wellness Essentials Box",
    img: gift2,
    price: 1999,
    mrp: 2399,
  },
  {
    id: 7,
    name: "Premium Guest Welcome Set",
    img: gift3,
    price: 2499,
    mrp: 2999,
  },
  {
    id: 8,
    name: "Premium Guest Welcome Set",
    img: gift4,
    price: 2499,
    mrp: 2999,
  },
];

export default function GiftSets() {
  return (
    <section className="products-page">
      <div className="product-header">
        <h1>Gift Sets</h1>
        <p>Thoughtfully curated gift sets for premium hospitality experiences.</p>
      </div>

      <div className="products-grid">
        {giftSets.map((item) => (
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

              {/* Price */}
              <div className="price-row">
                <span className="price">₹{item.price}</span>
                <span className="mrp">₹{item.mrp}</span>
                <span className="off">
                  {Math.round(
                    ((item.mrp - item.price) / item.mrp) * 100
                  )}% off
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
