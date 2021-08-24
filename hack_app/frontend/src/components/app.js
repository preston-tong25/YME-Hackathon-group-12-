import React, { Component } from "react";
import { render } from "react-dom";
import HomePage  from "./HomePage.js";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomePage />;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv); //first param is component, second is the target in html page