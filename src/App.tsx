import React from 'react';
import './App.css';
import Toggle from "./components/Toggle/Toggle";

const App: React.FC = () => {
  return (
    <div className="App">
      <Toggle label={"toggle"}/>
    </div>
  );
}

export default App;
