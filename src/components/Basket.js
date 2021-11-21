import React from "react";

function Basket({ cartItems, addToCart, removeFromCart, totalItemQty }) {
  const totalItemsPrice = cartItems.reduce(
    (acc, curItem) => acc + curItem.price * curItem.qty,
    0
  );

  const shipping = totalItemsPrice >= 10000000 ? 0 : totalItemQty * 120;
  const totalCost = totalItemsPrice + shipping;
  const shipDiscount = 10000000 - totalItemsPrice;

  return (
    <aside className="basket">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <h2>Cart is empty!</h2>}</div>
      <div className="basketList">
        {cartItems.map((item, index) => {
          return (
            <div key={item.id} className="basketItem">
              <button
                className="cartBtn"
                onClick={() => {
                  removeFromCart(item);
                }}
              >
                -
              </button>
              <div className="basketImage">
                <img src={item.picture} alt={item.name} />
                <p>{item.name}</p>
              </div>
              <div></div>
              <div className="basketPrice">
                {item.qty} <span>x</span>{" "}
                {new Intl.NumberFormat("en-EN", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price)}
              </div>
              <button
                className="cartBtn"
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
      <div className="summary">
        {cartItems.length !== 0 && (
          <>
            <div className="summaryDetails">
              <h2>All Items: </h2>
              <div>
                <h2>
                  {new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "USD",
                  }).format(totalItemsPrice)}
                </h2>
              </div>
            </div>
            <div className="summaryDetails">
              <h2>Shipping: </h2>
              <div>
                <h2>
                  {new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "USD",
                  }).format(shipping)}
                </h2>
              </div>
            </div>
            <div className="shipDiscount">
              <h4>We offer free shipping from $10M</h4>
              {shipDiscount <= 0 ? (
                <h4>Yay, FREE SHIPPING applied</h4>
              ) : (
                <>
                  <h4>
                    Order{" "}
                    {new Intl.NumberFormat("en-EN", {
                      style: "currency",
                      currency: "USD",
                    }).format(shipDiscount)}{" "}
                    more to be eligible!
                  </h4>
                </>
              )}
            </div>
            <div className="totalSummary">
              <h2>You pay: </h2>
              <div>
                <h2>
                  {new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "USD",
                  }).format(totalCost)}
                </h2>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Basket;
