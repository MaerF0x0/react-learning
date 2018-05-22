import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Mike', age: 35},
      {name: 'someone', age: 22},
      {name: 'someone else', age: 26},
    ],
  }

  switchNameHandler(newName) {
    this.setState({persons: [
      {name: newName, age: 35},
      {name: 'someone', age: 22},
      {name: 'someone else', age: 26},
    ]});
  }

  nameChangedHandler(event) {
    this.setState({persons: [
      {name: event.target.value, age: 35},
      {name: 'someone', age: 22},
      {name: 'someone else', age: 26},
    ]});

  }


  render() {
    return (
      <div className="App">
      <button onClick={()=>this.switchNameHandler('fish')}> Switch Name </button>
      <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'cat')}
      >
      I like motorcycles
      </Person>
       <Person changed={this.nameChangedHandler.bind(this)} name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
