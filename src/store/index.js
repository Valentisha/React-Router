import {combineReducers, applyMiddleware, compose, createStore} from 'redux'; //собирает в один редьюсер
import reducerCategory from './category';
import reducerTodo from './todo/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

 const rootReducers = combineReducers({ //входной файл приложения
    reducerTodo, 
    reducerCategory
});


export const configureStore = (initState) => {
    const store = createStore(rootReducers, initState, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}