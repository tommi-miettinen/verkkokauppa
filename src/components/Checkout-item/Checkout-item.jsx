import React from "react";
import ItemQuantityControls from "../Item-quantity-controls/Item-quantity-controls";
import "./Checkout-item.css";

const CheckoutItem = (props) => {
  const combinedPrice = props.item.quantity * props.item.hinta;
  return (
    <div className="cart-row" style={{ color: "black", display: "flex" }}>
      <img style={{ width: "60px" }} src={props.item.tuotekuva}></img>
      <span style={{ margin: "auto 0", marginLeft: 10 }}>
        {props.item.tuote}
      </span>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <div style={{ height: "50%", margin: "auto 0" }}>
          <ItemQuantityControls item={props.item} />
        </div>
        <div style={{ width: "100px", margin: "auto 0" }}>
          {props.item.hinta.toFixed(2)}€
        </div>
        <div style={{ width: "100px", margin: "auto 0" }}>
          {combinedPrice.toFixed(2)}€
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
