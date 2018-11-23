import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <p>teste</p>
       <Person name="Paty" age="29" > Hobbie: watch Tv series</Person>
      </div>
    );
  }
}

export default App;
