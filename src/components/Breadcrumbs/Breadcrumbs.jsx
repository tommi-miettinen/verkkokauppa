import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ match }) => {
  const urlParts = match.url.split("/");
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
        marginTop: 10,
      }}
    >
      <Link className="ebins" to="/">
        Etusivulle
      </Link>
      {` / `}
      <Link
        className="ebins"
        to={"/kauppa/" + urlParts[2]}
        replace={match.url.split("/").pop() === urlParts[2]}
      >
        {urlParts[2]}
      </Link>
      {urlParts[3] && ` / `}
      <Link
        className="ebins"
        to={"/kauppa/" + urlParts[2] + "/" + urlParts[3]}
        replace={match.url.split("/").pop() === urlParts[3]}
      >
        {urlParts[3]}
      </Link>
    </div>
  );
};

export default withRouter(Breadcrumbs);
