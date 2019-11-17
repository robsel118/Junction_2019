import React from "react";
import "./App.css";
import Dashboard from "./views/dashboard.component";
import { generateNewBasket } from "./firebase/firebase.utils";

function App() {
  // addCollectionAndDocuments("baskets", BASKET_DATA.baskets);
  // for (var i = 0; i < 20; i++) {
  //   generateNewBasket();
  // }
  setInterval(function() {
    generateNewBasket();
  }, 5000);
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
