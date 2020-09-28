import React from "react";
import "./App.css";
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/proj'>
            <Projects />
          </Route>

          <Route path='/con'>
            <Contact />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
