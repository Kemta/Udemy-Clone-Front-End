import React from "react";
import "./styles/main.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import AICareer from "./components/AICareer";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <AICareer />
      <Skills />
    </>
  );
}
