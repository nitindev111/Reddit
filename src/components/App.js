import React, { Component } from "react";
import { Router, browserHistory } from 'react-router';

import "./App.scss";
import routes from "../routes/routes";

class App extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        {routes}
      </Router>
    )
  }
}

export default App;
