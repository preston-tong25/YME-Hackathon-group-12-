import React, { Component } from 'react';
import UserPage from "./UserPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

  //routing system done in HomePage, to go to different pages

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
            <Switch>
              <Route exact path="/">
                <p>This is the home page</p>
              </Route>
              <Route path="/user" component={UserPage} />
            </Switch>
          </Router>
        );
    }
}