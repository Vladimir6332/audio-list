import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import MusicPanel from './components/MusicPanel/MusicPanel';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div className="wrapper">
      <Header></Header>
      <main className="app">
        <Switch>
          <Route path="/" exact component={MusicPanel} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
