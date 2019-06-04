import React, { Component } from "react";
import Modal from "./modal/index.jsx";
import "../style/App.css";


class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App about birds!</h1>
                <Modal/>
            </div>
        );
    }
}

export default App;