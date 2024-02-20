import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return(
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
  
}

export default App;
