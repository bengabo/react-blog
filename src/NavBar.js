import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/articles-list">Articles</Link>
      </li>
      <li>
        <Link to="/article-page">This is an article</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;