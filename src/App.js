import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import NavBar from './NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesList from './Pages/ArticlesList';
import ArticlePage from './Pages/ArticlePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/articles-list" component={ArticlesList} exact />
            <Route path="/article-page" component={ArticlePage} exact />
          </div>
      </div>
    </Router>
    );
  }
}

export default App;