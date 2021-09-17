import React, { Component } from 'react';
import Todos from '../Components/Todos';
import {connect} from 'react-redux';
import { actionEditTodo, actionRemoveTodo } from '../store/todo';


class TodosContainer extends Component{

    constructor(){
        super()
        this.state = {
            isShow: false,
            todoId: null,
            updateTitle: '',
            error: {},
        }
    }

    handlerRemoveTodo = (id) => {
        this.props.actionRemoveTodo(id);
    }

    handlerShowTodo = (todoId, todoTitle) => {
        this.setState({isShow: true}) //изменение состояния
        this.setState({todoId: todoId})
        this.setState({updateTitle: todoTitle})
    }

    handlerChange = (e) => {
        this.setState({updateTitle: e.target.value})
    } 

    handlerClose = () => {
        this.setState ({isShow: false})
    }

    handlerUpdateTodo = (todoId) => {
        const data ={
            id: todoId,
            title: this.state.updateTitle
        };
        if(!this.state.updateTitle.trim()){
           return this.setState({error: {massage: 'Дело не написано'} })

        }
        this.props.actionEditTodo(data);
        this.setState({isShow: false});
        this.setState({error: {} });
    }

    render(){
        return <Todos 
            handlerChange={this.handlerChange}
            updateTitle={this.state.updateTitle}
            handlerUpdateTodo={this.handlerUpdateTodo}
            todoId={this.state.todoId}
            handlerShowTodo={this.handlerShowTodo}
            isShow={this.state.isShow} 
            todos={this.props.todo} 
            error={this.state.error}
            handlerRemoveTodo={this.handlerRemoveTodo}
            handlerClose={this.handlerClose}/>
    }
};
const mapStateToProps = (state) =>{
    return {
        todo: state.reducerTodo.todos
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        actionRemoveTodo: (payload) => dispatch(actionRemoveTodo(payload)),
        actionEditTodo: (payload) => dispatch(actionEditTodo(payload))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);