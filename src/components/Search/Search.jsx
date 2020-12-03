import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../../products";
import "./Search.css";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const filterProducts = () => {
    const arr = Object.entries(products)
      .map((element) => element[1])
      .flat()
      .filter(
        (product) =>
          input && product.tuote.toLowerCase().includes(input.toLowerCase())
      );
    return arr;
  };

  const tuotteet = filterProducts();

  return (
    <div className="asd">
      <input
        className="search-bar"
        type="text"
        style={{ color: "black" }}
        placeholder="Hae tuotteista."
        onChange={(e) => {
          setIsVisible(true);
          setInput(e.target.value);
        }}
        value={input}
      ></input>
      {isVisible && (
        <div className="search-results">
          {tuotteet.map((tuote) => {
            const url = `/kauppa/${tuote.kategoria}/${tuote.alakategoria}/${
              tuote.id
            }/${tuote.tuote.replace(/\s/g, "-")}`;
            return (
              <div style={{ margin: 10 }} key={tuote.id}>
                <Link
                  onClick={() => setIsVisible(false)}
                  style={{
                    textDecoration: "none",
                    fontSize: 16,
                  }}
                  to={url.toLowerCase()}
                >
                  {tuote.tuote}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
