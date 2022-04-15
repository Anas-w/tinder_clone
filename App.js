import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <h>hello</h>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
