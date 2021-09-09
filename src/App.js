import React, {memo} from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import TodosContainer from './container/TodosContainer';
import AddTodoContainer from './container/AddTodoContainer';


function App() {
  return (
    <div>
      <div className="App">
        <Header/>
        <AddTodoContainer/>
        <TodosContainer/>
      </div>
        
    </div>
  );
};

export default memo(App);
