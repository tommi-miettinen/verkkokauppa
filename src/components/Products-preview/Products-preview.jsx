import React from "react";
import ProductItemCard from "../Product-item-card/Product-item-card";
import products from "../../products";

const ProductsPreview = (props) => {
  const previewProducts = products[
    props.location.pathname.split("/")[2]
  ].filter((product) => product.varastossa > 0);

  const filteredProducts = previewProducts.filter(
    (product) =>
      product.alakategoria.toLowerCase() ===
      props.location.pathname.split("/")[3]
  );

  const showProducts = props.location.pathname.split("/")[3]
    ? filteredProducts
    : previewProducts;

  return (
    <div
      style={{
        color: "black",
        display: "flex",
        width: "60%",
        margin: "auto",
      }}
    >
      {showProducts.map((product) => (
        <ProductItemCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPreview;
