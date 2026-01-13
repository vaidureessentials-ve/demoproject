import "./ProductsPage.css";

const ProductsPage = ({ title, description }) => {
  return (
    <section className="products-page">
      <div className="products-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="empty">
          No products found in this category.
        </p>
      </div>
    </section>
  );
};

export default ProductsPage;
