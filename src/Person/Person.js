import React, { Component } from 'react';

class Person extends Component {

  render() {
    return (
    <div onClick={this.props.click}>
      <h1> Person({this.props.name}) age({this.props.age}) </h1>
      <p> About me: {this.props.children} </p>
      <input type="text" onChange={this.props.changed} defaultValue={this.props.name} />
    </div>
    )
  }

}

export default Person;
