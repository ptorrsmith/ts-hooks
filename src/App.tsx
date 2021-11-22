// import React from 'react';
import './App.css';
import UseStateComponent from './components/useStateComponent';
import UseEffectComponent from './components/useEffectComponent';
import UseContextComponent from './components/useContextComponent';
import UseReducerComponent from './components/useReducerComponent';
function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />

      <h1>useEffect</h1>
      <UseEffectComponent />

      <h1>useContext</h1>
      <UseContextComponent />

      <h1>useReducer</h1>
      <h4>For more complex state than useState</h4>
      <h6>"like redux built into react"</h6>
      <UseReducerComponent />

    </div>
  );
}

export default App;
