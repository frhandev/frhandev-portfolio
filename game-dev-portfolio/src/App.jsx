import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Home from "./Components/Home/Home.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Footer from "./Components/Footer.jsx";
import ScrollBar from "./Components/ScrollBar.jsx";
import "./App.css";
import Games from "./Components/Games/Games.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Skills />
      <Games />
      <hr />
      <Footer />
      {/* <ScrollBar /> */}
    </>
  );
}

export default App;
