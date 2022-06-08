import React from "react";
import ReactDOM from "react-dom";

//this '*' means to import everything from the pi module/object
//'*' is the wildcard, and this is often discouraged, as sometimes
//it is better to just import what you want, so for instance
//'import  pi, { doublePi, triplePi } from "./math";' is an alternative
import * as pi from "./math";

//we then specify below which part of the pi module.object we want
ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
