import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Subcategories from "../components/Subcategories/Subcategories";
import ProductsPreview from "../components/Products-preview/Products-preview";

const CategoryPage = (props) => {
  return (
    <div>
      <Breadcrumbs />
      <Subcategories />
      <ProductsPreview {...props} />
    </div>
  );
};

export default CategoryPage;
