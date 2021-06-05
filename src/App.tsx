import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import Game from './components/game/Game';

function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <main className="app">
        <Router>
          <Route path="/" exact>
            Start
          </Route>
          <Route path="/game">
            <Game></Game>
          </Route>
        </Router>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
