import React from 'react';
import './App.css';
import Title from './components/Title';
import TodoForm from "./components/TodoForm";


function App() {
  return (
    <div className="App">
            <Title/>
            <TodoForm/>
    </div>
  );
}

export default App;
