// import React from 'react';
import './App.css';
import UseStateComponent from './components/useStateComponent';
import UseEffectComponent from './components/useEffectComponent';
import UseContextComponent from './components/useContextComponent';
import UseReducerComponent from './components/useReducerComponent';
import UseRefComponent from './components/useRefComponent';
import CustomHookComponent from './components/customHookComponent'; // since exports default, can call it what we want
import TestComponent from './components/evenMoreReactComponent';
import { HeadingViaFunction, HeadingViaConst, ListComponent } from './components/evenMoreReactComponent';

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

      <h1>useRef</h1>
      <UseRefComponent />

      <h1>customHook</h1>
      <CustomHookComponent />

      <h1>evenMoreReact</h1>
      <TestComponent />

      <HeadingViaFunction title="cool title brought to you by a function" />

      <HeadingViaConst title="cool title brought to you by a const" />

      <ListComponent />
    </div>
  );
}

export default App;
