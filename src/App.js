import React, {memo} from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import TodosContainer from './container/TodosContainer';
import AddTodoContainer from './container/AddTodoContainer';
import AddCategoryContainer from './container/AddCategoryContainer';
import CategoryListContainer from './container/CategoryListContainer';
import ProgressBarContainer from './container/ProgressBarContainer';
import Search from './Components/Search';

function App() {
  return (
    <div>
      <div className="App">
        <Header/>
        <div className='container'>
        <ProgressBarContainer/>
        <Search/>
           <div className='wrapper__app'>
              <div className='wrapper__todo'>
                <div>
                 <AddTodoContainer/>
                 <TodosContainer/>
                </div>
              </div>
              <div className='category'>
                 <AddCategoryContainer/>
                 <CategoryListContainer/>
              </div>
            </div>
         </div> 
      </div> 
    </div>
  );
};

export default memo(App);
