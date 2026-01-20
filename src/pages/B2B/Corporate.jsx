import "./B2B.css";
import { FiHeart } from "react-icons/fi";

const corporateProducts = [
  {
    id: 1,
    title: "Corporate Gifting",
    desc: "Thoughtfully curated gift sets for employees and clients.",
    img: "/images/corporate-custom.jpg",
    price: 1599,
    mrp: 1999,
  },
  {
    id: 2,
    title: "Customized Branding",
    desc: "Branded packaging tailored to company identity.",
    img: "/images/corporate-custom.jpg",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 3,
    title: "Corporate Gifting",
    desc: "Thoughtfully curated gift sets for employees and clients.",
    img: "/images/corporate-custom1.jpg",
    price: 1599,
    mrp: 1999,
  },
  {
    id: 4,
    title: "Customized Branding",
    desc: "Branded packaging tailored to company identity.",
    img: "/images/corporate-custom2.jpg",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 5,
    title: "Corporate Gifting",
    desc: "Thoughtfully curated gift sets for employees and clients.",
    img: "/images/corporate-custom.jpg",
    price: 1599,
    mrp: 1999,
  },
  {
    id: 6,
    title: "Customized Branding",
    desc: "Branded packaging tailored to company identity.",
    img: "/images/corporate-custom.jpg",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 7,
    title: "Corporate Gifting",
    desc: "Thoughtfully curated gift sets for employees and clients.",
    img: "/images/corporate-custom1.jpg",
    price: 1599,
    mrp: 1999,
  },
  {
    id: 8,
    title: "Customized Branding",
    desc: "Branded packaging tailored to company identity.",
    img: "/images/corporate-custom2.jpg",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 9,
    title: "Customized Branding",
    desc: "Branded packaging tailored to company identity.",
    img: "/images/corporate-custom.jpg",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 10,
    title: "Customized Branding",
    desc: "Branded packaging tailored to company identity.",
    img: "/images/corporate-custom1.jpg",
    price: 2499,
    mrp: 2999,
  },
  {
    id: 11,
    title: "Corporate Gifting",
    desc: "Thoughtfully curated gift sets for employees and clients.",
    img: "/images/corporate-custom2.jpg",
    price: 1599,
    mrp: 1999,
  },
  {
    id: 12,
    title: "Corporate Gifting",
    desc: "Thoughtfully curated gift sets for employees and clients.",
    img: "/images/corporate-custom1.jpg",
    price: 1599,
    mrp: 1999,
  },
];

export default function Corporate() {
  return (
    <section className="products-page">
              <div className="product-header">
                <h1>Corporate</h1>
                <p>Professional hygiene and gifting solutions for Indian businesses.</p>
              </div>
        
              <div className="products-grid">
                {corporateProducts.map((item) => (
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

