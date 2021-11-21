// import React from 'react';
import './App.css';
import UseStateComponent from './components/useStateComponent';
import UseEffectComponent from './components/useEffectComponent';

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />

      <h1>useEffect</h1>
      <UseEffectComponent />

    </div>
  );
}

export default App;
