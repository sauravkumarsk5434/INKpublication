import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Header1 from "./Comp/Header1";
import Header2 from "./Comp/Header2";
import Home from "./pages/Home";
import './App.css';
import Footer from "./Comp/Footer";
import Publication_process from "./pages/Publication_process";

function App() {
  return (
    <div className="container-fluid">
      <Header1 />
      <Header2 />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publication-process" component={Publication_process} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
