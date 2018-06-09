import React from 'react';
import { render } from 'react-dom';
import Click from "./Click"


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Click />
    
  </div>
);

render(<App />, document.getElementById('root'));
