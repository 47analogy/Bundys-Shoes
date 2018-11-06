import React, { Component } from "react";

import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { NavLink } from "react-router-dom";
import { Container } from "semantic-ui-react";

// import LandingPage from './pages/LandingPage';
// import ShoeListPage from "./pages/ShoeListPage";
// import ShoeFormPage from "./pages/ShoeFormPage";

class App extends Component {
  render() {
    return (
      <Container>
        {/* TODO: Refactor into Nav component */}
        {/* TODO: add LandingPage  */}
        <div className="App">
          <h1>Bundy's Shoes</h1>
          <div className="ui three item menu">
            <NavLink className="item" activeClassName="active" exact to="/">
              Home
            </NavLink>
            <NavLink className="item" activeClassName="active" to="/shoe-list">
              Shoe List
            </NavLink>
            <NavLink className="item" activeClassName="active" to="/shoe-form">
              Shoe Ratings
            </NavLink>
          </div>
          {/* <Route exact path='/' component={LandingPage} /> */}
          {/* <Route path="/shoe-list" component={ShoeListPage} />
          <Route path="/shoe-form" component={ShoeFormPage} />
          <Route path="/shoe-form/rate/:_id" component={ShoeFormPage} /> */}
        </div>
      </Container>
    );
  }
}

export default App;
