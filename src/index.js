import React, { useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import reportWebVitals from "./reportWebVitals";
import News from "./components/news";
import NavLink from "./components/NavLink";
import Header from "./components/Header";

ReactDOM.render(
  <BrowserRouter>
  <>
  <Header/>
  <NavLink/>
    <Route exact path="/Apple"><News newsName="iphone" /></Route>
    <Route path="/Sports"><News newsName="sports" /></Route>
    <Route path="/Bitcoin"><News newsName="bitcoin" /></Route>
    <Route path="/nasa"><News newsName="nasa" /></Route>
    <Route path="/games"><News newsName="games" /></Route>
    <Route path="/upsc"><News newsName="upsc" /></Route>
    <Route path="/education"><News newsName="education" /></Route>
    <Route path="/movies"><News newsName="movies" /></Route>
    <Route path="/business"><News newsName="business" /></Route>
  </>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
