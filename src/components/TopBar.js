import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { faChessRook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = (props) => {
  return (
    <div className="topBar">
      <h3>
        {" "}
        <FontAwesomeIcon
          style={{
            color: "#6aa8e8",
            fontSize: "25px",
            marginRight: "10px",
          }}
          icon={faChessRook}
        />
        Age Of Empires
      </h3>
      <div className="topBarLink">
        <Link to={`/`}>Home</Link>
        <Link to={`/unitsPage`}>Units Page</Link>
      </div>
    </div>
  );
};

export default TopBar;
