import React from "react";
import Navigation from "./Navigation";
import Home from "./Home";
import Projects from "./Projects";
import Notes from "./Notes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="pusher">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/notes" exact component={Notes} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
