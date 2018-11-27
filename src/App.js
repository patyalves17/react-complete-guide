import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { name: 'Paty', age: 29 },
      { name: 'Fulano', age: 30 },
      { name: 'Ciclano', age: 21 }
    ]
  }

  swhitchNameHandler = (newName) => {
    console.log("change name");
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Fulano', age: 30 },
        { name: 'Ciclano', age: 21 }
      ]
    });
  }

  changeNameHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      persons: [
        { name: 'Paty', age: 29 },
        { name: event.target.value, age: 30 },
        { name: 'Ciclano', age: 21 }
      ]
    });
  }

  render() {

    const style = {
      background: 'red'
    }

    return (
      <div className="App">
        <p>teste</p>
        <button
          onClick={this.swhitchNameHandler.bind(this, "Patricia")}
          style={style} >
          Switch Name</button>
        <Person
          click={this.swhitchNameHandler.bind(this, "Patricia !!!")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}  >
          Hobbie: watch Tv series
       </Person>
        <Person click={() => this.swhitchNameHandler("Paty!!!! ")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.changeNameHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
  }
}

export default App;
