import React, { Component } from 'react';

const App = () => {
  return (
    <div>
      <Toggle />
    </div>
  );
};

class Toggle extends Component {
  state = {
    toggle: false,
  };

  render() {
    return (
      <div>
        <p>The Status is: {this.state.toggle ? 'ON' : 'OFF'}</p>
        <button>Toggle</button>
      </div>
    );
  }
}

export default App;
