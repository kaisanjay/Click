import React from "react";
import { render } from "react-dom";
import Click from "./Click";
import Click1 from "./Click1";
import Click2 from "./Click2";
import Click3 from "./Click3";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <div>
      <Click />
    </div>
    <div>
      <Click1 />
    </div>
      <Click2 />
    <div />

    <div>
      <Click3 />
      </div>
  </div>
);

render(<App />, document.getElementById("root"));
