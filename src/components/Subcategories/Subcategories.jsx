import React from "react";
import { withRouter } from "react-router-dom";
import "./Subcategories.css";

const subcategoryRoutes = {
  emolevyt: ["AM4", "LGA1151"],
  näytönohjaimet: ["AMD", "Nvidia"],
  prosessorit: ["AM4", "LGA1151"],
};

const Subcategories = (props) => {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        width: "60%",
        margin: "auto",
      }}
    >
      {subcategoryRoutes[props.location.pathname.split("/")[2]].map(
        (subcategory) => (
          <div
            className="subcategory-item"
            key={subcategory}
            onClick={() => {
              props.history.push(
                `${props.location.pathname}/${subcategory.toLowerCase()}`
              );
            }}
          >
            {subcategory}
          </div>
        )
      )}
    </div>
  );
};
export default withRouter(Subcategories);
