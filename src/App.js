import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Nahid S and is
          <a
            href="https://github.com/nahidshiddo/react-weather-project"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            {" "}
            open sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}
