import React, { useEffect, useState } from "react";
import ageImage from "../resources/images/age.jpg";
import TopBar from "./TopBar";

const Home = (props) => {
  useEffect(() => {});

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
