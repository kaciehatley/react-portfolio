import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/index.js"
import About from "./components/About/index.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./components/Body/index.js"
import Portfolio from "./components/Portfolio/index.js"
import Contact from "./components/Contact/index.js"

function App() {
  return (
<div className="App">
          <Router>
      <div>
        <Navbar />
        <Body/>
        <Switch>
          <Route exact path={["/"]}>
            <About />
          </Route>
          <Route exact path={["/portfolio"]}>
            <Portfolio />
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
