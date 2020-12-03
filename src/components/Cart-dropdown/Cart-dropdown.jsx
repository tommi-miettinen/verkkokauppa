import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import CartdropdownItem from "../Cart-dropdown-item/Cart-dropdown-item";
import "./Cart-dropdown.css";

const CartDropdown = (props) => {
  const hidden = useSelector((state) => state.cart.hidden);
  const items = useSelector((state) => state.cart.cartItems);
  const getTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity * item.hinta;
    });
    return total;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "HIDE_CART" });
  }, [props]);

  return (
    !hidden && (
      <div style={{ width: items.length <= 0 ? "20%" : "" }} className="cart">
        {items.map((item) => (
          <CartdropdownItem item={item} hidden={hidden} />
        ))}
        {items.length > 0 ? (
          <div style={{ marginTop: "auto" }}>
            Yhteensä: {getTotalPrice().toFixed(2)} €{" "}
          </div>
        ) : (
          <div style={{ margin: "auto" }}>Ostoskori on tyhjä.</div>
        )}

        <button
          onClick={() => props.history.push("/ostoskori")}
          className="checkout-btn"
        >
          Kassalle
        </button>
      </div>
    )
  );
};

export default withRouter(CartDropdown);
