import defaultedExport, { myVariable, testing } from "./utils.js";
import React from "react";
import ReactDOM from "react-dom/client";

testing();
console.log(myVariable, defaultedExport);

const h1 = React.createElement(
  "h1",
  {
    id: "id_h1",
    className: "class_h1",
    key: "key_h1",
    style: {
      color: "red",
    },
  },
  "Inner HTML h1"
);

// const h2 = React.createElement(
//   "h2",
//   {
//     id: "id_h2",
//     key: "key_h2",
//     className: "class_h2",
//     style: { color: "blue" },
//   },
//   "Inner HTML h2"
// );

// const div = React.createElement("div", null, [h1, h2]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);

// React Element
const h2 = <h2 id="id_heading2">Heading 2</h2>;

const Heading = function () {
  return <h3>This is h3</h3>;
};

const Heading2 = () => <h5>this i s h5</h5>;

//React Functional Component
const Title = () => {
  return (
    <div>
      {h2}
      {console.log("Hello There from TItle")}
      {/* This is termed as Component Composition using component inside another component */}
      <Heading />
      <h1>This is a h1</h1>
      <h1>This is another h1</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title />);
