import React from "react";
import About from "../../blocks/about/about";
import StarsList from "../../blocks/stars-list/stars-list";

function MainPage({ stars }) {
  return (
    <>
      <About />
      <StarsList stars={stars} />
    </>
  );
}

export default MainPage;