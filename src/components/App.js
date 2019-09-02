import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import About from "./about/About";
import Home from "./home/Home";
import PageNotFound from "./PageNotFound";
import ToDoForm from "./todolist/ToDoForm";

// Header contains the NavLink that specifies the pages to navigate to.
// Switch and Route should contain the page path and the component to load once path is requested
// from header
// Route for '/' must always contain 'exact' as otherwise it will always match every other page below it.
const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/todo" component={ToDoForm} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
