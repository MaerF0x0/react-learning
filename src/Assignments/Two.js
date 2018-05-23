import React, { Component } from 'react';


class AssignmentTwoComponent extends Component {
  state = {text: ''}

  onInputChange = (event) =>  {
    const text = event.target.value;
    this.setState({text});
  }

  charStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid',
  };
  render() {
    const chars = this.state.text.split('').map((char) => {
      return <CharComponent style={this.charStyle} char={char}/>
    });

    return (
      <div>
        <input
          type="text"
          placeholder="type to count length"
          onChange={this.onInputChange}
        />
        <p>Length: {this.state.text.length || ''} </p>
        <ValidationComponent text={this.state.text.length}/>
        {chars}
      </div>
    );
  }
};

const ValidationComponent = (props) => {
  if (props.text.length === 0) {
    return null;
  } else if (props.length < 5 ) {
    return (
      <strong> Text too short! </strong>
    );
  } else if (props.length > 5) {
    return (
      <strong> Text too long! </strong>
    );
  }

  return null;
}

const CharComponent = (props) => {
  return (
    <div style={props.style}>{props.char}</div>
  );
}

export {
  AssignmentTwoComponent,
}
