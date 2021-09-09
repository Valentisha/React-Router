import React, { Component } from 'react';
import Todos from '../Components/Todos';
import {connect} from 'react-redux';
import { actionRemoveTodo } from '../store/todo';

class TodosContainer extends Component{
    handlerRemoveTodo = (id) => {
        this.props.actionRemoveTodo(id);
    }
    render(){
        console.log(this.props);
        return (
            <Todos todos={this.props.todo} handlerRemoveTodo={this.handlerRemoveTodo}/>
        )
    }
};
const mapStateToProps = (state) =>{
    return {
        todo: state.reducerTodo.todos

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        actionRemoveTodo: (payload) => dispatch(actionRemoveTodo(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);