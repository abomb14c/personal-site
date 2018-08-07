import React, { Component } from 'react';
import './App.css';
import Navigation from '../../Components/Nav/Navigation';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Home from '../../Components/Home/Home'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <Route
            exact path= "/"
            component={Home} 
        />
      </div>
    );
  }
}

export default withRouter(App);
