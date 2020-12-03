import React from "react";
import AddToCartButton from "../Add-to-cart-button/Add-to-cart-button";
import products from "../../products";

const ProductItem = (props) => {
  const category = props.location.pathname.split("/")[2];
  const item = products[category].filter(
    (item) => item.id === +props.match.params.id
  )[0];
  console.log(item);

  const formatItemDescription = (str) => {
    const bold = /\[b].+?\[b]/gm;
    const content = str.replace(bold, "/s/$&/s/");
    const parts = content.split("/s/");
    const result = parts.map((part, index) => {
      if (part.match(bold)) {
        return (
          <span key={index} style={{ fontWeight: "bold", color: "black" }}>
            {part.slice(3, -3)}
          </span>
        );
      }
      return (
        <span
          key={index}
          style={{
            color: "black",
          }}
        >
          {part}
        </span>
      );
    });
    return result;
  };

  return (
    <div
      style={{
        border: "1px solid lightgrey",
        width: "60%",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <img
          style={{ borderRight: "1px solid lightgrey" }}
          src={item.tuotekuva}
        ></img>
        <span style={{ padding: 10, fontSize: 20 }}>{item.tuote}</span>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <span style={{ padding: 10, fontSize: 20 }}>
            {item.hinta.toFixed(2)}€
          </span>
          <AddToCartButton height={40} width={100} product={item} />
        </div>
      </div>
      <div
        style={{
          color: "black",
          whiteSpace: "pre-wrap",
          paddingBottom: 20,
        }}
      >
        {formatItemDescription(item.tuotekuvaus)}
      </div>
    </div>
  );
};

export default ProductItem;
