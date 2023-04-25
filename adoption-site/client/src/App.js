import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Doggies from "./pages/Doggies/Doggies";
import Kitties from "./pages/Kitties/Kitties";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doggies" element={<Doggies />} />
        <Route path="/Kitties" element={<Kitties />} />
      </Routes>
    </div>
  );
}

export default App;
