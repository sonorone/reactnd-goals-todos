import React from "react";

const Context = React.createContext();

function Parent() {
  return (
    <div>
      <h1>Parent</h1>
      <Child />
    </div>
  );
}
function Child() {
  return (
    <div>
      <h1>Child</h1>
      <Grandchild />
    </div>
  );
}
function Grandchild() {
  return (
    <Context.Consumer>
      {name => (
        <div>
          <h1>Grandchild</h1>
          <p>name: {name}</p>
        </div>
      )}
    </Context.Consumer>
  );
}

class App extends React.Component {
  render() {
    const name = "hans";

    return (
      <Context.Provider value={name}>
        <div>
          <Parent />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
