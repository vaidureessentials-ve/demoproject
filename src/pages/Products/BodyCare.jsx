import "./BodyCare.css";
import { FiHeart } from "react-icons/fi";

import img1 from "../../assets/ProductsBody/bodycare1.png";
import img2 from "../../assets/ProductsBody/bodycare2.png";
import img3 from "../../assets/ProductsBody/bodycare3.png";
import img4 from "../../assets/ProductsBody/bodycare4.png";

const products = [
  {
    id: 1,
    name: "Herbal Body Lotion",
    img: img1,
    price: 349,
    mrp: 449,
  },
  {
    id: 2,
    name: "Moisturizing Body Wash",
    img: img2,
    price: 399,
    mrp: 499,
  },
  {
    id: 3,
    name: "Herbal Body Lotion",
    img: img3,
    price: 349,
    mrp: 449,
  },
  {
    id: 4,
    name: "Moisturizing Body Wash",
    img: img4,
    price: 399,
    mrp: 499,
  },
  {
    id: 5,
    name: "Herbal Body Lotion",
    img: img1,
    price: 349,
    mrp: 449,
  },
  {
    id: 6,
    name: "Moisturizing Body Wash",
    img: img2,
    price: 399,
    mrp: 499,
  },
  {
    id: 7,
    name: "Herbal Body Lotion",
    img: img3,
    price: 349,
    mrp: 449,
  },
  {
    id: 8,
    name: "Moisturizing Body Wash",
    img: img4,
    price: 399,
    mrp: 499,
  },
  {
    id: 9,
    name: "Herbal Body Lotion",
    img: img1,
    price: 349,
    mrp: 449,
  },
  {
    id: 10,
    name: "Moisturizing Body Wash",
    img: img2,
    price: 399,
    mrp: 499,
  },
  {
    id: 11,
    name: "Herbal Body Lotion",
    img: img3,
    price: 349,
    mrp: 449,
  },
  {
    id: 12,
    name: "Moisturizing Body Wash",
    img: img4,
    price: 399,
    mrp: 499,
  },
];

          
export default function BodyCare() {
  return (
    <section className="products-page">
      <div className="product-header">
        <h1>Body Care</h1>
        <p>Premium body care essentials designed for luxury hospitality.</p>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            
            {/* Wishlist ICON ONLY */}
            <button className="wishlist-btn">
              <FiHeart />
            </button>

            {/* Product Image */}
            <img src={item.img} alt={item.name} />

            {/* Product Info */}
            <div className="product-info">
              <h3>{item.name}</h3>

              <div className="price-row">
                <span className="price">₹{item.price}</span>
                <span className="mrp">₹{item.mrp}</span>
                <span className="off">
                  {Math.round(((item.mrp - item.price) / item.mrp) * 100)}% off
                </span>
              </div>

              {/* Button UI ONLY */}
              <button className="add-cart">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}