import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { id:'1', name: 'Paty', age: 29 },
      { id:'2', name: 'Fulano', age: 30 },
      { id:'3', name: 'Ciclano', age: 21 }
    ],
    showPerson: false
  }

  // swhitchNameHandler = (newName) => {
  //   console.log("change name");
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 29 },
  //       { name: 'Fulano', age: 30 },
  //       { name: 'Ciclano', age: 21 }
  //     ]
  //   });
  // }

  changeNameHandler = (personId, event) => {
    const persons=[...this.state.persons];
    const personIndex=persons.findIndex(person=>{
      return person.id===personId;
    });
    persons[personIndex].name=event.target.value;
    this.setState({persons:persons})
  }

  togglePersonHandler= ()=>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }

  deletePersonHandler=(index)=>{
    const persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({ persons:persons });
  }

  render() {
    const style = {
      background: 'red'
    }

    let persons = null;
    if( this.state.showPerson ){
      persons=(
        this.state.persons.map((person, index)=>{
          return (
            <Person
            click={()=>this.deletePersonHandler(index)}
            changed={(event)=>this.changeNameHandler(person.id, event)}
            name={person.name}
            age={person.age} 
            key={person.id}/>
            )

        })
 

      // <div>
      //   <Person
      //     click={this.swhitchNameHandler.bind(this, "Patricia !!!")}
      //     name={this.state.persons[0].name}
      //     age={this.state.persons[0].age}  >
      //     Hobbie: watch Tv series
      // </Person>
      //   <Person click={() => this.swhitchNameHandler("Paty!!!! ")}
      //     name={this.state.persons[1].name}
      //     age={this.state.persons[1].age}
      //     changed={this.changeNameHandler} />
      //   <Person
      //     name={this.state.persons[2].name}
      //     age={this.state.persons[2].age} />
      // </div>
      ) 

    }

    return (
      <div className="App">
        <p>teste</p>
        <button
          onClick={this.togglePersonHandler}
          style={style} >
          Switch Name
        </button>

        {persons}

      {/* { this.state.showPerson ?
        <div>
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
        : null
      } */}


      </div>
    );
  }
}

export default App;
