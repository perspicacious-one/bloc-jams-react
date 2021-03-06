import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing/Landing';
import Library from './components/Library/Library';
import Album from './components/Album/Album';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-light justify-content-start">
            <a className="navbar-brand" href="#">
              <img src="{'/assets/images/jelly__logo.png'}" width="30" height="30" className="d-inline-block align-top" alt="" />
              Jelly
            </a>
            <Link className="nav-item nav-link" to='/'>Landing</Link>
            <Link className="nav-item nav-link" to='/library'>Library</Link>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
