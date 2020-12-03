import React from "react";
import { useDispatch } from "react-redux";
import "../../Icons/ShoppingCartIcon";
import "./Add-to-cart-button.css";
import ShoppingCartIcon from "../../Icons/ShoppingCartIcon";

const AddToCartButton = ({ height, width, product }) => {
  const dispatch = useDispatch();
  return (
    <button
      style={{ width, height }}
      className="add-to-cart-btn"
      onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
    >
      <span style={{ margin: "auto" }}>
        <ShoppingCartIcon />
      </span>
    </button>
  );
};

export default AddToCartButton;
