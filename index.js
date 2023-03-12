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
    style: {
      color: "red",
    },
  },
  "Inner HTML h1"
);

const h2 = React.createElement(
  "h2",
  {
    id: "id_h2",
    className: "class_h2",
    style: { color: "blue" },
  },
  "Inner HTML h2"
);

const div = React.createElement("div", null, [h1, h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

console.log(h1, div, root);
