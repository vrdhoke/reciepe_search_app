import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import MoviesList from './MoviesList'
import NameForm from '../components/NameForm';
export default function Main() {
    return (
      <div>
        <Router>
          <Route exact path='/reciepe_search_app' component={NameForm}/>
        </Router>
      </div>
    );
  }