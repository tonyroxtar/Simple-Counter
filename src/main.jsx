import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SecondsCounter from "./components/seconds-counter.jsx";

let number = 0;
const digit1 = (num) => {
  return num % 10;
};

const digit2 = (num) => {
  return Math.floor((num / 10) % 10);
};

const digit3 = (num) => {
  return Math.floor((num / 100) % 10);
};

const digit4 = (num) => {
  return Math.floor((num / 1000) % 10);
};

setInterval(() => {
  number++;

  //la funcion encierra el DOM y se llama dentro de nuestra <app/>(){
  // no resultó a través del App element
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <SecondsCounter
        digit1={digit1(number)}
        digit2={digit2(number)}
        digit3={digit3(number)}
        digit4={digit4(number)}
      />
    </React.StrictMode>
  );
}, 1000);
