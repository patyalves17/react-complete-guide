import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Paty', age: 29 },
      { id: '2', name: 'Fulano', age: 30 },
      { id: '3', name: 'Ciclano', age: 21 }
    ],
    showPerson: false
  }

  changeNameHandler = (personId, event) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(person => {
      return person.id === personId;
    });
    persons[personIndex].name = event.target.value;
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      background: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.changeNameHandler(person.id, event)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h2>Welcome to react</h2>
          <p className={classes.join(" ")}>This is really working</p>
          <button
            onClick={this.togglePersonHandler}
            style={style} >
            Switch Name
        </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);