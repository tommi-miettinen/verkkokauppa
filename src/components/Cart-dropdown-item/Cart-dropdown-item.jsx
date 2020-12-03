import React from "react";
import ItemQuantityControls from "../Item-quantity-controls/Item-quantity-controls";
import { withRouter } from "react-router-dom";
import "./Cart-dropdown-item.css";

const CartDropdownItem = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span style={{ color: "black" }} key={item.id}>
        {item.tuote}
      </span>
      {item.quantity > 0 && (
        <div>
          <ItemQuantityControls item={item} />
          <span style={{ padding: 5 }}>
            {`
            x ${item.hinta.toFixed(2)}€ = 
            ${(item.hinta * item.quantity).toFixed(2)}€`}
          </span>
        </div>
      )}
    </div>
  );
};

export default withRouter(CartDropdownItem);
