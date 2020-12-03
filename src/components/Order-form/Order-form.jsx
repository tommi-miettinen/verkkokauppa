import React from "react";
import Input from "../Input/Input";
import "./Order-form.css";

const OrderForm = (props) => {
  return (
    <div className="orderform-container">
      <div
        style={{
          width: "45%",
          display: "flex",
          height: "300px",
          flexDirection: "column",
        }}
      >
        <Input label="Etunimi" />
        <Input label="Sukunimi" />
        <Input label="Osoite" />
        <Input label="Postinumero" />
        <Input label="Kunta" />
      </div>
      <div
        style={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          height: "300px",
        }}
      >
        <Input label="Sähköpostiosoite" />
        <Input label="Puhelinnumero" />
        <button
          className="sdf"
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "#1d1551",
            color: "white",
            border: "none",
            marginTop: "auto",
            marginBottom: "14px",
          }}
        >
          Tilaa
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
