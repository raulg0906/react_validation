import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import fieldBox from "./fieldbox";
import submitted from "./submitted"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Route exact path="/" component = {fieldBox} />
      <Route path="/submitted" component = {submitted} />
      </div>
      </Router>
    );
  }
}

export default App;
