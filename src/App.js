import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import {UserInput, UserOutput} from './Assignments/One.js';

class App extends Component {
  state = {
    persons: [
      {name: 'Mike', age: 35},
      {name: 'someone', age: 22},
      {name: 'someone else', age: 26},
    ],
    userNames: ['Ground Control', 'Major Tom'],
    lyrics: [
      'Ground Control to Major Tom...',
      ' Ground Control to Major Tom...(again)',
      ' Take your protein pills and put your helmet on'
    ],
    groundControlMessage: '',
    majorTomMessage: '',
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

  majorTomHandler(event) {
    event.target.style.backgroundColor = "#777";
    const t = event.target
    setTimeout(() => {
      t.style.backgroundColor = "#fff";
      t.style.border = "3px double red";
    }, 500);
    this.setState({
      majorTomMessage: event.target.value,
    })
  }

  groundControlHandler() {
    this.setState({
      groundControlMessage: this.state.groundControlMessage + this.state.lyrics.shift(),
    });
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
      <hr/>
      <h1> Assignment1 </h1>
      <UserInput changed={this.majorTomHandler.bind(this)}/>
      <UserOutput userName={this.state.userNames[0]} contentTwo={this.state.groundControlMessage}/>
      <UserOutput userName={this.state.userNames[1]} contentTwo={this.state.majorTomMessage}/>
      <button onClick={ this.groundControlHandler.bind(this) }> Next lyric </button>
      </div>

    );
  }
}

export default App;
