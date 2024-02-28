import logo from './logo.svg';
import './App.css';
import React from 'react'
import MyGoal from './  components/Day2/MyGoal'
import ClassComponentGreeting from './  components/Day2/ClassComponentGreetinng'
import FunctionComponentGreeting from './  components/Day2/FunctionComponentGreeting'
import ConstantFunctionGreeting from './  components/Day2/ConstantFunctionGreeting'

// FUNCTION APP
function App() {
  // START BUSINESS LOGIC

  const stringElement = "Hello String Element";
  const jsxElement = <h2>Hello JSX Syntax</h2>;
  const jsxVariableEl = <h2>JSX: {stringElement}</h2>

  // JSX & FUNCTIONS
  const name = "Jasmin";
  const lastName = "Causevic";
  function fullName() {
    return name + " " +lastName;
  }

  const jsxFunctionEl = <h2>Hello {fullName()}</h2>;


  // END OF BUSINESS LOGIC
  return (
    <div className="App-2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{stringElement}</h2>
        {jsxElement}
        {jsxVariableEl}
        {jsxFunctionEl}
        <ClassComponentGreeting />
        <FunctionComponentGreeting />
        <FunctionComponentGreeting />
        <FunctionComponentGreeting />
        <ConstantFunctionGreeting />
        <MyGoal />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
