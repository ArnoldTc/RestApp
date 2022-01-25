import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import IndexPage from './components/IndexPage';
import './style.scss';
import MoviePage from './components/MoviePage';
import PeoplePage from './components/PeoplePage';
import Header from './components/common/Header';

const history = createBrowserHistory();
export default function App() {
  return (
    <>
        <Router history={history}>
          <Header />
          <Routes>
            <Route exact path="/" element={<IndexPage />} />
            <Route exact path="/movie/:id" element={<MoviePage />} />
            <Route exact path="/actor/:id" element={<PeoplePage />} />
          </Routes>
        </Router>
    </>
  );
}
