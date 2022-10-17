import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/about";
import Home from "./pages/home";
import Library from "./pages/library";

function App() {
  return (
      <div className="App">
        <NavBar />
        <div className="body">
          <Routes>
            
            <Route path="/about" element={ <About /> } />
            <Route path="/" element={ <Home /> } />
            <Route path="/library" element={ <Library />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
