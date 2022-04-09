/* eslint-disable */
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Education from "./components/education/education";
// import Experience from "./components/experience/experience";
import Project from "./components/project/project";
// import Portfolio from "./components/portfolio/portfolio";
import Tstack from "./components/tstack/tstack";
import Achievement from "./components/contact/achievement";
import Footer from "./components/footer/footer";
import { IconContext } from "react-icons";
import Projects from "./components/projects/projects";
import React from "react";

function App() {
  return (
    <div>
      <IconContext.Provider value={{ color: "#4db5ff" }}>
        <Header></Header>
        <Nav></Nav>
        <Education></Education>
        <Project></Project>
        <Tstack></Tstack>
      </IconContext.Provider>
    </div>
  );
}

export default App;
