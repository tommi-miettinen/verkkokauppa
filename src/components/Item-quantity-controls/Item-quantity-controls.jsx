import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const ItemQuantityControls = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_QUANTITY",
      payload: { quantity: quantity, id: item.id },
    });
  }, [quantity]);

  const changeQuantity = (e) => {
    if (e.target.value.match(/[0-9]+$/)) {
      console.log(e.target.value);
      setQuantity(e.target.value);
    }
  };
  return (
    <>
      <button
        style={{
          backgroundColor: "#302f4d",
          border: "none",
          width: "20px",
          color: "white",
        }}
        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
      >
        -
      </button>
      <input
        type="text"
        style={{ width: "20px" }}
        onChange={(e) => changeQuantity(e)}
        value={item.quantity}
      ></input>
      <button
        style={{
          backgroundColor: "#302f4d",
          border: "none",
          width: "20px",
          color: "white",
        }}
        onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
      >
        +
      </button>
    </>
  );
};

export default ItemQuantityControls;
