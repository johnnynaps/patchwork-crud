import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import addAccountComponent from "./components/add-account.component";

import AddGame from "./components/add-game.component";
import Game from "./components/game.component";
import GamesList from "./components/games-list.component";
import HomePage from "./components/home.component";
import NotFound from "./components/not-found.component";
import Account from "./components/account.component";

class App extends Component {
  render() {  
    return (
      <Router>
        <nav className="navbar">
            <h1 className="nav-title">Patchwork</h1>
            <div className="links">
                <Link to="/add">Add Game</Link>
                <Link to="/games">Games</Link>
                <Link to="/account/new">New Account</Link>
                <Link to="/account">Account</Link>
                <Link to="/">Home</Link>
            </div>
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/games" component={GamesList} />
            <Route exact path="/add" component={AddGame} />
            <Route exact path="/games/:id" component={Game} />
            <Route exact path="/account/new" component={addAccountComponent} />
            <Route exact path="/account/:id" component={Account} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
