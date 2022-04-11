import React from "react";

import "./App.css";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSIde/RightSide";

const App = () => {
  return (
    <>
      <section className="app--section">
        <LeftSide />
        <RightSide />
      </section>
    </>
  );
};
export default App;
