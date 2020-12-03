import React from "react";
import Nav from "./components/Navigation/Nav";
import Banner from "./components/Banner/Banner";
import Routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Routes />
    </div>
  );
};

export default App;
