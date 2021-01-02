import React from 'react';
import '../index.scss';
import Nav from './Nav'
import Home from './Home'
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-114584547-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
