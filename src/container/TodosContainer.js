import React, {useState } from 'react';
import Todos from '../Components/Todos';
import {connect} from 'react-redux';
import { actionEditTodo, actionRemoveTodo } from '../store/todo';
import { useLocation } from 'react-router';



function TodosContainer ({actionRemoveTodo, actionEditTodo, todos}){
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
        actionRemoveTodo: (payload) => dispatch(actionRemoveTodo(payload)),
        actionEditTodo: (payload) => dispatch(actionEditTodo(payload))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);