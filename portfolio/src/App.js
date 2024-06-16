import React from "react";
import Nav from "./components/Nav";
import Maincontent from "./components/MainContent";
// import Info from "./components/Info";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Maincontent />
      {/* <Info /> */}
    </div>
  );
}

export default App;
