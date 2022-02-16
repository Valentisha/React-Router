import React, {useEffect, useState } from 'react';
import Todos from '../Components/Todos';
import {connect} from 'react-redux';
import { actionEditTodo, actionRemoveTodo, actionSetTodo, actionGetLocalStorageTodo } from '../store/todo';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import {enums} from '../Components/AddTodo/Index'



function TodosContainer ({actionRemoveTodo, actionEditTodo, todos, actionGetLocalStorageTodo}){
    const [isShow, setIsShow] = useState(false);
    const [todoId, setTodoId] = useState(null);
    const [updateTitle, setUpdateTitle] = useState('');
    const [error, setError] = useState({});

    //     this.state = {
    //         isShow: false,
    //         todoId: null,
    //         updateTitle: '',
    //         error: {},
    //     }
    // }

    const location = useLocation()

    const getValueSearch = new URLSearchParams(location.search).get('search')

const filterTodoTitle = getValueSearch ? todos.filter((item) => item.title.toLocaleLowerCase().includes(getValueSearch.toLocaleLowerCase().trim() )) : todos;

    const handlerRemoveTodo = (id) => {
        actionRemoveTodo(id);
    }

    const handlerShowTodo = (todoId, todoTitle) => {
        setIsShow(true); //изменение состояния
        setTodoId(todoId);
        setUpdateTitle(todoTitle);
    }

    const handlerChange = (e) => {
        setUpdateTitle( e.target.value);
    } 

    const handlerClose = () => {
        setIsShow (false);
    }

    const getTodoLocalStorage = () => {
        const getTodo = window.localStorage.getItem(enums.todos);
        const resultJSson = JSON.parse(getTodo)
        actionGetLocalStorageTodo(resultJSson)
    }

    const handlerUpdateTodo = (todoId) => {
        const data ={
            id: todoId,
            title: updateTitle
        };
        if(!updateTitle.trim()){
            return setError({error: {massage: 'Дело не написано'} })
        }
        actionEditTodo(data);
        setIsShow(false);
        setError({error: {} })
    }

    useEffect(() => {
        getTodoLocalStorage()
    }, []);

        return <Todos 
            handlerChange={handlerChange}
            updateTitle={updateTitle}
            handlerUpdateTodo={handlerUpdateTodo}
            todoId={todoId}
            handlerShowTodo={handlerShowTodo}
            isShow={isShow} 
            todos={filterTodoTitle} 
            error={error}
            handlerRemoveTodo={handlerRemoveTodo}
            handlerClose={handlerClose}/>
    };

const mapStateToProps = (state) =>{
    return {
        todos: state.reducerTodo.todos
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        actionGetLocalStorageTodo: (payload) => dispatch(actionGetLocalStorageTodo(payload)),
  
        actionSetTodo: (payload) => dispatch(actionSetTodo(payload)),
        actionRemoveTodo: (payload) => dispatch(actionRemoveTodo(payload)),
        actionEditTodo: (payload) => dispatch(actionEditTodo(payload))
    };
};

TodosContainer.propTypes = {
    todos: PropTypes.array,
    actionRemoveTodo: PropTypes.func,
    actionEditTodo: PropTypes.func,

}
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);