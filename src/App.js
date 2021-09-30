import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CarsPage from './components/CarsPage';
import FilmsPage from './components/FilmsPage';
import IndexPage from './components/IndexPage';
import './style.scss';

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/cars" component={CarsPage} />
        <Route exact path="/films" component={FilmsPage} />
      </Router>
    </div>
  );
}
