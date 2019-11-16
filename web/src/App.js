import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { addCollectionAndDocuments } from "./firebase/firebase.utils";
import { BASKET_DATA } from "./data/dummy";
function App() {
  // addCollectionAndDocuments("baskets", BASKET_DATA.baskets);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
