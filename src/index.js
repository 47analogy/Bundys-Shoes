import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import App from "./App";
import ShoeListPage from "./pages/ShoeListPage";
import ShoeFormPage from "./pages/ShoeFormPage";

export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/shoe-list" component={ShoeListPage} />
        <Route path="/shoe-form" component={ShoeFormPage} />
        <Route path="/shoe-form/rate/:_id" component={ShoeFormPage} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change

// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: http://bit.ly/CRA-PWA
