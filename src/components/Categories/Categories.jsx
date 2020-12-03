import React from "react";
import CategoryItem from "../Category-item/Category-item";
import MoboIcon from "../../Icons/MoboIcon";
import CpuIcon from "../../Icons/CpuIcon";
import GpuIcon from "../../Icons/GpuIcon";
import "./Categories.css";

const categories = [
  { name: "emolevyt", icon: <MoboIcon /> },
  { name: "prosessorit", icon: <CpuIcon /> },
  { name: "näytönohjaimet", icon: <GpuIcon /> },
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map(({ name, icon }) => (
        <CategoryItem key={name} category={name} icon={icon} />
      ))}
    </div>
  );
};

export default Categories;
