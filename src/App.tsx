import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ComponentProvider from "./context/componentProvider";
import About from "./pages/about";
import ComponentsPage from "./pages/componentsPage";
import Home from "./pages/home";
import Library from "./pages/library";

function App() {
  return (
    <ComponentProvider>
      <div className="App">
        <NavBar />
        <div className="body">
          <Routes>
            <Route path="/library/:id" element={<ComponentsPage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </ComponentProvider>
  );
}

export default App;
