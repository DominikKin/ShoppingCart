import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const totalItemQty = cartItems.reduce((acc, curItem) => acc + curItem.qty, 0);

  function addToCart(product) {
    const prodExists = cartItems.find((prod) => {
      return prod.id === product.id;
    });

    if (prodExists) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...prodExists, qty: prodExists.qty + 1 }
            : item;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  function removeFromCart(product) {
    if (product.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id ? { ...item, qty: item.qty - 1 } : item;
        })
      );
    }
  }

  return (
    <div className="App">
      <Header totalItemQty={totalItemQty} />
      <div className="container">
        <Main products={products} addToCart={addToCart} />
        <Basket
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          totalItemQty={totalItemQty}
        />
      </div>
    </div>
  );
}

export default App;
