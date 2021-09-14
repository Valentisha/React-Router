import {combineReducers, compose, createStore} from 'redux'; //собирает в один редьюсер
import reducerCategory from './category';
import reducerTodo from './todo/index';

 const rootReducers = combineReducers({ //входной файл приложения
    reducerTodo, 
    reducerCategory
});

export const store = createStore (rootReducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);