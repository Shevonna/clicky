import React from 'react';
import './App.css';
import Navbar from './nav';
// import Clicked from './pics'
import Clicked from './pics'
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from './score'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron fluid>
        <div class="container">
          <h1>Clicky Game!</h1>
          <p>
            Click on an image to earn points, but dont click on the same image twice!
          </p>
        </div>
      </Jumbotron>
      <Score />
    </div>
  );
}

export default App;
