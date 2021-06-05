import React, { useEffect, useState } from "react";
import {
  faPencilAlt,
  faFileInvoice,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import ageImage from "../resources/images/age.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBar from "./TopBar";

const Home = (props) => {
  const [dragPosition, setDragPosition] = useState();

  useEffect(() => {});

  const onDrag = (event) => {};

  return (
    <>
      <TopBar />
      <div className="homeBox">
        <img src={ageImage}></img>
      </div>
    </>
  );
};

export default Home;
