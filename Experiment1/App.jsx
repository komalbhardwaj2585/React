import React from "react";

// Reusable ProductCard component
function ProductCard({ name, price, inStock }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>

      {/* Styling inside component for demo */}
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin: 10px;
          width: 200px;
          text-align: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        h3 {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

// Parent component rendering multiple ProductCards
export default function App() {
  return (
    <div className="container">
      <h2>Products List</h2>
      <div className="products">
        <ProductCard name="Wireless Mouse" price={25.99} inStock={true} />
        <ProductCard name="Keyboard" price={45.5} inStock={false} />
        <ProductCard name="Monitor" price={199.99} inStock={true} />
      </div>

      <style jsx>{`
        .container {
          border: 1px solid #000;
          padding: 20px;
          margin: 20px auto;
          width: 700px;
          text-align: center;
        }
        .products {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
}
