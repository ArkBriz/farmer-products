import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";

function Main({advantages}) {
  return (
    <>
      <About />
      <Advantages advantages={advantages}/>
    </>
  );
}

export default Main;