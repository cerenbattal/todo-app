import React from "react";
import ListsBody from "./ListsBody";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import { Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <div className="pusher">
      <Jumbotron />
      <div
        className="ui center aligned vertical segment"
        style={{ padding: "2.5em" }}
      >
        <Header />
        <ListsBody />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
