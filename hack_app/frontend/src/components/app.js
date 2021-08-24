import React, { Component } from "react"
import { render } from "react-dom"

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Testing React Code</h1>;
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv); //first param is component, second is the target in html page