import React, { useState } from 'react';

const App = () => {
  return (
    <div>
      <Toggle />
      <img src="" name="" />
      <p>Other Status: </p>
    </div>
  );
};

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prevState) => !prevState);

  return (
    <div>
      <p>The Status is: {toggle ? 'ON' : 'OFF'}</p>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default App;
