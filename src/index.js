import react from "react";
import reactDOM from "react-dom";

const name = "Anmol";

reactDOM.render(
  <div>
    <h1>Hello, {name}</h1>
    <p>Your lucky No. is {Math.round(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
