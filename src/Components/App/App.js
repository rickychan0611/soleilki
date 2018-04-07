import React from 'react';
import './App.css';
import {menuList} from '../menuList/menuList';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Restaurant ordering system by Ricky Chan.
        </p>
      </div>
    );
  }
}
