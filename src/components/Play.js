import React, { Component } from 'react';

export default class Play extends Component {
  state = {
    count: 0,
    input: '',
  }

  handleCount = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }

  handleInputChange = ({ target }) => {
    this.setState({ input: target.value });
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCount}>Add</button>
        <input type="text" value={this.state.input} onChange={this.handleInputChange} />
      </>
    );
  }
}
