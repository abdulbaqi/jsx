//import lib
import React from "react";
import ReactDOM from "react-dom";

//we can use functional components

const getValue = () => {
  return "enter your name";
};

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  const buttonText = "Click Me";
  const secondButton = { text: "I am 2" };
  const styleButton2 = { backgroundColor: "red", color: "yellow" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" value={getValue()} />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
      <button style={styleButton2}>{secondButton.text}</button>
      <p>The time now is {getTime()}</p>
    </div>
  );
};

//show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
