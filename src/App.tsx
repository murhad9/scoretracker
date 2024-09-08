import React from "react";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Micro+5&display=swap"
        rel="stylesheet"
      ></link>
      <header className="App-header">
        <h1> ScoreTracker</h1>
      </header>
      <Button variant="contained" color="error">
        RESET
      </Button>
    </div>
  );
}

export default App;
