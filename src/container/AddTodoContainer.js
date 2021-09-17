import React, { Component } from "react";
import {actionSetTodo} from '../store/todo';
import { actionRemoveTodo } from "../store/todo";
import AddTodo from '../Components/AddTodo/Index';
import { connect } from 'react-redux';

class AddTodoContainer extends Component{
 
    constructor(){
        super()
        this.state = {
            value: '',
            error: []
        }
    };

    handleChangeInput = (e) => {
        this.setState({value: e.target.value});
    };

    handleCreateTodo = () => {
        const data = {
            title: this.state.value,
            id: Date.now()
        };
        if(!this.state.value.trim()) {
            return this.setState({error: {massage: 'Дело не написано'}});
        }
        this.props.actionSetTodo(data)
        this.setState({value: ''});
    };

    render(){
        return <AddTodo 
        value={this.state.value} 
        error={this.state.error}
        handleChangeInput={this.handleChangeInput} 
        handleCreateTodo={this.handleCreateTodo}/>
    }   
}

const mapDispatchToProps = (dispatch) => {
        return {
            actionSetTodo: (payload) => dispatch(actionSetTodo(payload))
        }
};

export default connect(null, mapDispatchToProps)(AddTodoContainer);