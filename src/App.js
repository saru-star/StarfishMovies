import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import axios from "axios";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: process.env.REACT_APP_API_KEY,
};
const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Content />
    </div>
  );
};

export default App;
