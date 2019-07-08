import React, { Component } from 'react';
/* Add these import statements */
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieDetailContainer';

/* Incorporate this example into your code */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' Component={ MovieSearchContainer } />
          <Route path='/movie/:id' Component={ MovieDetailContainer } />
        </div>
      </Router>
    );
  }
}
