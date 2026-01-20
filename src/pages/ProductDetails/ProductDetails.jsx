import { useParams } from "react-router-dom";
import { useRef } from "react";
import "./ProductDetails.css";

import img1 from "../../assets/ProductsBody/bodycare1.png";
import img2 from "../../assets/ProductsBody/bodycare2.png";
import img3 from "../../assets/ProductsBody/bodycare3.png";
import img4 from "../../assets/ProductsBody/bodycare4.png";

const products = [
  {
    id: 1,
    name: "Herbal Body Lotion",
    price: 349,
    mrp: 449,
    images: [img1, img2, img3, img4],
    description: "100% vegan self-care product for daily hydration.",
  },
  {
    id: 2,
    name: "Moisturizing Body Wash",
    price: 399,
    mrp: 499,
    images: [img2, img1, img3, img4],
    description: "Gentle cleansing body wash for all skin types.",
  },
  {
    id: 3,
    name: "Herbal Body Lotion",
    price: 349,
    mrp: 449,
    images: [img3, img1, img2, img4],
    description: "Luxury herbal lotion for deep nourishment.",
  },
  {
    id: 4,
    name: "Moisturizing Body Wash",
    price: 399,
    mrp: 499,
    images: [img4, img1, img2, img3],
    description: "Refreshing body wash with herbal extracts.",
  },
  {
    id: 5,
    name: "Herbal Body Lotion",
    price: 349,
    mrp: 449,
    images: [img1, img2, img3, img4],
    description: "100% vegan self-care product for daily hydration.",
  },
  {
    id: 6,
    name: "Moisturizing Body Wash",
    price: 399,
    mrp: 499,
    images: [img2, img1, img3, img4],
    description: "Gentle cleansing body wash for all skin types.",
  },
  {
    id: 7,
    name: "Herbal Body Lotion",
    price: 349,
    mrp: 449,
    images: [img3, img1, img2, img4],
    description: "Luxury herbal lotion for deep nourishment.",
  },
  {
    id: 8,
    name: "Moisturizing Body Wash",
    price: 399,
    mrp: 499,
    images: [img4, img1, img2, img3],
    description: "Refreshing body wash with herbal extracts.",
  },
  {
    id: 9,
    name: "Herbal Body Lotion",
    price: 349,
    mrp: 449,
    images: [img1, img2, img3, img4],
    description: "100% vegan self-care product for daily hydration.",
  },
  {
    id: 10,
    name: "Moisturizing Body Wash",
    price: 399,
    mrp: 499,
    images: [img2, img1, img3, img4],
    description: "Gentle cleansing body wash for all skin types.",
  },
  {
    id: 11,
    name: "Herbal Body Lotion",
    price: 349,
    mrp: 449,
    images: [img3, img1, img2, img4],
    description: "Luxury herbal lotion for deep nourishment.",
  },
  {
    id: 12,
    name: "Moisturizing Body Wash",
    price: 399,
    mrp: 499,
    images: [img4, img1, img2, img3],
    description: "Refreshing body wash with herbal extracts.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const mainImageRef = useRef(null);

  if (!product) return <p>Product not found</p>;

  const changeImage = (img) => {
    if (mainImageRef.current) {
      mainImageRef.current.src = img;
    }
  };

  return (
    <section className="product-details">
      <div className="details-wrapper">

        {/* LEFT GALLERY */}
        <div className="details-images">

          {/* THUMBNAILS */}
          <div className="thumbs">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => changeImage(img)}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <img
            ref={mainImageRef}
            className="main-img"
            src={product.images[0]}
            alt={product.name}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="details-info">
          <h1>{product.name}</h1>

          <div className="price-row">
            <span className="price">₹{product.price}</span>
            <span className="mrp">₹{product.mrp}</span>
            <span className="off">
              {Math.round(
                ((product.mrp - product.price) / product.mrp) * 100
              )}
              % off
            </span>
          </div>

          <p className="desc">{product.description}</p>

          <button className="add-cart big">ADD TO CART</button>

          <ul className="features">
            <li>✔ 100% Vegan</li>
            <li>✔ Luxury Hospitality Grade</li>
            <li>✔ Dermatologically Tested</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
