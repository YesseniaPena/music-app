import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";

function App() {
  return (
    <div className="Login">
      <NavBar />
      <Login />
      

      <header className="My Music App"></header>
    </div>
  );
}

export default App;
