import React, { Component } from 'react';
import { connect } from 'react-redux';

const fishStyle = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid',
};

class AssignmentFourComponent extends Component {
  render() {
    return (
      <div style={fishStyle}>{this.props.fish}
        <p> {'swish!'.repeat(this.props.swishes)} </p>
      </div>
    );
  }
};

const mapStateToProps = state => {
    return {
        fish: state.fish,
        swishes: state.swishes,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(AssignmentFourComponent);
