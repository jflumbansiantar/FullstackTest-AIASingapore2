import React from 'react';
import GlobalStyle,  { Button, Container, MainHeading } from "./GlobalStyle";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./component/Navbar/Navbar";
import Homepage from "./pages/Homepage";
// import from "./GlobalStyle";
// import Photo from "./pages/Photo";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Container>

    <Router>
      <GlobalStyle />
      {/* <Navbar /> */}
      {/* <Switch> */}
          {/* <Homepage /> */}
        <Routes>
          jancuk
          <Route path="/home" exact component={Homepage} />
        </Routes>
      {/* </Switch> */}
    </Router>
    </Container>
  );
}

export default App;
