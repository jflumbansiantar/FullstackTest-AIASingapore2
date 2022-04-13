import React from 'react';
import GlobalStyle from "./GlobalStyle";
import {BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
          <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
