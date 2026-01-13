import "./HairCare.css";
import { FiHeart } from "react-icons/fi";

import img1 from "../../assets/HairHotel/haircare1.png";
import img2 from "../../assets/HairHotel/haircare2.png";
import img3 from "../../assets/HairHotel/haircare3.png";
import img4 from "../../assets/HairHotel/haircare4.png";


const hairProducts = [
  {
    id: 1,
    name: "Herbal Shampoo",
    img: img1,
    price: 399,
    mrp: 499,
  },
  {
    id: 2,
    name: "Nourishing Conditioner",
    img: img2,
    price: 449,
    mrp: 549,
  },
  {
    id: 3,
    name: "Herbal Shampoo",
    img: img3,
    price: 399,
    mrp: 499,
  },
  {
    id: 4,
    name: "Nourishing Conditioner",
    img: img4,
    price: 449,
    mrp: 549,
  },
  {
    id: 5,
    name: "Herbal Shampoo",
    img: img1,
    price: 399,
    mrp: 499,
  },
  {
    id: 6,
    name: "Nourishing Conditioner",
    img: img2,
    price: 449,
    mrp: 549,
  },
  {
    id: 7,
    name: "Herbal Shampoo",
    img: img3,
    price: 399,
    mrp: 499,
  },
  {
    id: 8,
    name: "Nourishing Conditioner",
    img: img4,
    price: 449,
    mrp: 549,
  },
];

export default function HairCare() {
  return (
    <section className="hair-page">
      <div className="hair-header">
        <h1>Hair Care</h1>
        <p>Professional hair care solutions crafted for premium hospitality.</p>
      </div>

      <div className="hair-grid">
        {hairProducts.map((item) => (
          <div className="hair-card" key={item.id}>
            
            {/* Wishlist */}
            <button className="wishlist-btn">
              <FiHeart />
            </button>

            {/* Image */}
            <img src={item.img} alt={item.name} />

            {/* Content */}
            <div className="hair-info">
              <h3>{item.name}</h3>

              {/* Price */}
              <div className="price-row">
                <span className="price">₹{item.price}</span>
                {item.mrp && (
                  <>
                    <span className="mrp">₹{item.mrp}</span>
                    <span className="off">
                      {Math.round(
                        ((item.mrp - item.price) / item.mrp) * 100
                      )}% off
                    </span>
                  </>
                )}
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