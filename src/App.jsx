import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./views/Home";
import Cities from "./views/Cities";
import SingleCity from "./views/SingleCity";
import Any from "./views/Any";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/any" element={<Any />} />
          <Route path="/cities">
            <Route path="" element={<Cities />} />
            <Route path=":id" element={<SingleCity />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
