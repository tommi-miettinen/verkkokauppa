import React from "react";
import CartDropdown from "../Cart-dropdown/Cart-dropdown";
import MouseIcon from "../../Icons/MouseIcon";
import ShoppingCartIcon from "../../Icons/ShoppingCartIcon";
import Search from "../Search/Search";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Nav.css";

const Nav = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navigation">
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => history.push("/")}
          className="item"
        >
          <MouseIcon />
          <span className="hover" style={{ color: "white", padding: "10px" }}>
            kauppa
          </span>
        </div>
        <Search />
        <div>
          <div
            onClick={() => dispatch({ type: "TOGGLE_CART" })}
            className="shopping-cart-btn"
          >
            <span style={{ margin: "auto 0" }}>
              <ShoppingCartIcon />
            </span>
          </div>
        </div>
        <CartDropdown />
      </nav>
    </>
  );
};

export default withRouter(Nav);
