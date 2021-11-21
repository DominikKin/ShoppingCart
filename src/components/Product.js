import React, { useState, useEffect } from "react";

function Product({ product, addToCart }) {
  const [whichVariant, setWhichVariant] = useState(0);
  const [productToAdd, setProductToAdd] = useState({
    price: product.price,
    name: product.variants[whichVariant].detailName,
    id: product.variants[whichVariant].id,
    picture: product.variants[whichVariant].picture,
  });

  useEffect(() => {
    setProductToAdd({
      price: product.price,
      name: product.variants[whichVariant].detailName,
      id: product.variants[whichVariant].id,
      picture: product.variants[whichVariant].picture,
    });
  }, [whichVariant]);

  return (
    <div className="product">
      <div className="productImage">
        <img
          src={product.variants[whichVariant].picture}
          alt={product.variants[whichVariant].detailName}
        />
        <p>{product.variants[whichVariant].detailName}</p>
      </div>
      <div className="productVariants">
        <h3>Select color</h3>
        {product.variants.map((variant, index) => {
          return (
            <div
              className="variant"
              style={{ backgroundColor: variant.color }}
              onClick={() => {
                setWhichVariant(index);
              }}
            ></div>
          );
        })}
      </div>
      <div className="productDetails">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <h4 className="price">
          Price:{" "}
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </h4>
        <button
          className="addToCart"
          onClick={() => {
            addToCart(productToAdd);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;

// return (
//   <div className="product">
//     <div className="productImage">
//       <img
//         src={product.variants[whitePrimary ? 0 : 1].picture}
//         alt={product.variants[whitePrimary ? 0 : 1].detailName}
//       />
//       <p>{product.variants[whitePrimary ? 0 : 1].detailName}</p>
//     </div>
//     <div className="secondaryProductImage">
//       <img
//         onClick={() => {
//           setWhitePrimary(!whitePrimary);
//           setProductToAdd(
//             whitePrimary
//               ? {
//                   price: product.price,
//                   name: product.variants[0].detailName,
//                   id: product.variants[0].id,
//                   picture: product.variants[0].picture
//                 }
//               : {price: product.price,
//                 name: product.variants[1].detailName,
//                 id: product.variants[1].id,
//                 picture: product.variants[1].picture}
//           );
//         }}
//         src={product.variants[whitePrimary ? 1 : 0].picture}
//         alt={product.variants[whitePrimary ? 1 : 0].detailName}
//       />
//       <p>{product.variants[whitePrimary ? 1 : 0].detailName}</p>
//     </div>
//     <div className="productDetails">
//       <h3>{product.name}</h3>
//       <p>{product.desc}</p>
//       <h4 className="price">Price: ${product.price}</h4>
//       <button
//         className="addToCart"
//         onClick={() => {
//           addToCart(product);
//         }}
//       >
//         Add To Cart
//       </button>
//     </div>
//   </div>
// );
