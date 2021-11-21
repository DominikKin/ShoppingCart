import React from "react";
import Product from "./Product";

function Main({ products, addToCart }) {
  return (
    <main className="main">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.variants[0].id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
