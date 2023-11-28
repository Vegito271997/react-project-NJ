import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>This is title</h1>;

const Heading = () => (
  <div>
    <h1>React functional component</h1>
    <Title />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
