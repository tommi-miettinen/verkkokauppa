import React from "react";
import { withRouter } from "react-router-dom";
import AddToCartButton from "../Add-to-cart-button/Add-to-cart-button";
import "./Product-item-card.css";

const ProductItemCard = (props) => {
  const pushUrl = props.location.pathname.includes(
    props.product.alakategoria.toLowerCase()
  )
    ? `${props.location.pathname}/${
        props.product.id
      }/${props.product.tuote.replace(/\s/g, "-")}`
    : `${props.location.pathname}/${props.product.alakategoria}/${
        props.product.id
      }/${props.product.tuote.replace(/\s/g, "-")}`;
  return (
    <div
      style={{
        color: "black",
        width: "170px",
        border: "1px solid lightgrey",
        display: "flex",
        margin: 2,
        flexDirection: "column",
      }}
    >
      <div
        onClick={() => props.history.push(pushUrl)}
        style={{ display: "flex" }}
      >
        <img className="hover" width="100%" src={props.product.tuotekuva} />
      </div>
      <span style={{ color: "black", padding: 10 }}>{props.product.tuote}</span>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
        }}
      >
        <span style={{ margin: "auto" }}>
          {props.product.hinta.toFixed(2)}€
        </span>
        <AddToCartButton width={70} product={props.product} />
      </div>
    </div>
  );
};

export default withRouter(ProductItemCard);
