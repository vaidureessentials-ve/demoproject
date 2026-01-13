import "./GiftSets.css";
import { FiHeart } from "react-icons/fi";

import gift4 from "../../assets/gift4.png";
import gift5 from "../../assets/gift5.png";
import gift6 from "../../assets/gift6.png";

import gift7 from "../../assets/gift7.png";
import gift8 from "../../assets/gift8.png";
import gift9 from "../../assets/gift9.png";
import gift10 from "../../assets/gift10.png";


const giftSets = [
  {
    id: 1,
    name: "Luxury Travel Kit",
    img: gift4,
    price: 1499,
    mrp: 1799,
  },
  {
    id: 2,
    name: "Wellness Essentials Box",
    img: gift5,
    price: 1999,
    mrp: 2399,
  },
  {
    id: 3,
    name: "Premium Guest Welcome Set",
    img: gift6,
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
    img: gift5,
    price: 1499,
    mrp: 1799,
  },
  {
    id: 6,
    name: "Wellness Essentials Box",
    img: gift6,
    price: 1999,
    mrp: 2399,
  },
  {
    id: 7,
    name: "Premium Guest Welcome Set",
    img: gift7,
    price: 2499,
    mrp: 2999,
  },
  {
    id: 8,
    name: "Premium Guest Welcome Set",
    img: gift8,
    price: 2499,
    mrp: 2999,
  },
  {
    id: 9,
    name: "Luxury Travel Kit",
    img: gift9,
    price: 1499,
    mrp: 1799,
  },
  {
    id: 10,
    name: "Wellness Essentials Box",
    img: gift10,
    price: 1999,
    mrp: 2399,
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
