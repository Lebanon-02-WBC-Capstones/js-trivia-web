import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Quizes from "./Components/Quizes";
import Result from "./Components/Result";
import Question from "./Components/Question";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/quizes" exact>
            <Quizes />
          </Route>

          <Route path="/create" exact>
            <Create />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/question/:quizId" exact>
            <Question />
          </Route>

          <Route path="/result" exact>
            <Result />
          </Route>

          <Route path="/profile/:userId" exact>
            <Profile />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
