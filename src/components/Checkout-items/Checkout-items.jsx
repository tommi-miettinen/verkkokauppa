import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../Checkout-item/Checkout-item";
import { withRouter } from "react-router-dom";
import "./Checkout-items.css";

const CheckoutItems = (props) => {
  const items = useSelector((state) => state.cart.cartItems);
  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity * item.hinta;
    });
    return total;
  };
  console.log(props);
  return (
    <div className="checkout-items-container">
      <div style={{ display: "flex" }}>
        <span>Tuote</span>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <div style={{ width: "100px" }}>Hinta</div>
          <div style={{ width: "100px" }}>Yhteensä</div>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem item={item} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          className="sdf"
          style={{
            color: "white",
            marginTop: 10,
            backgroundColor: "#1d1551",
            border: "none",
            padding: "10px",
          }}
          onClick={() =>
            props.history.push(`${props.match.path}/toimitustiedot`)
          }
        >
          Seuraava
        </button>
        {items.length > 0 && (
          <div
            style={{
              width: "100px",
              marginTop: 10,
              fontWeight: "bold",
              marginRight: 5,
            }}
          >
            {getTotalPrice().toFixed(2)}€
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(CheckoutItems);
