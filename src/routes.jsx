import React from "react";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import CheckoutItems from "./components/Checkout-items/Checkout-items";
import OrderForm from "./components/Order-form/Order-form";
import Categories from "./components/Categories/Categories";
import CategoryPage from "./pages/category-page";
import ProductsPreview from "./components/Products-preview/Products-preview";
import ProductItem from "./components/Product-item/Product-item";
import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Route path="/" exact render={(props) => <Categories {...props} />} />
      <Route
        path="/ostoskori"
        exact
        render={(props) => <CheckoutItems {...props} />}
      />
      <Route
        path="/ostoskori/toimitustiedot"
        exact
        render={(props) => <OrderForm {...props} />}
      />
      <Route
        path="/kauppa/:category"
        exact
        render={(props) => <CategoryPage {...props} />}
      />
      <Route
        path="/kauppa/:category/:subcategory"
        exact
        render={(props) => (
          <div style={{ marginTop: 10 }}>
            <Breadcrumbs />
            <div style={{ marginTop: 10 }}>
              <ProductsPreview {...props} />
            </div>
          </div>
        )}
      />
      <Route
        path="/kauppa/:category/:subcategory/:id/:item"
        exact
        render={(props) => <ProductItem {...props} />}
      />
    </>
  );
};

export default Routes;
