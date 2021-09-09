import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo/Index';


function App() {
  return (
    <div>
      <div className="App">
        <Header/>
        <AddTodo/>
        <Todos/>
      </div>
        
    </div>
  );
};

export default App;
