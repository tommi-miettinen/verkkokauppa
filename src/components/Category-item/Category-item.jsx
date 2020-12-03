import React from "react";
import { withRouter } from "react-router-dom";
import "./Category-item.css";

const CategoryItem = ({ category, history, icon }) => {
  return (
    <div
      className="category-item"
      onClick={() => history.push(`kauppa/${category}`)}
    >
      <span style={{ textTransform: "capitalize" }}>{category}</span>
      {icon}
    </div>
  );
};

export default withRouter(CategoryItem);
