import React from "react";
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';
import './style.scss';
import { useSelector } from "react-redux";

export const enums = {
    todos: 'todos'
}
export default function AddTodo({value, handleCreateTodo, handleChangeInput, error}) {
  const {todos} = useSelector((state) => state.reducerTodo);
  const saveLocalStorage = () => {
      window.localStorage.setItem(enums.todos, JSON.stringify(todos))
  }
    return (
        <div className='group'>
        <Input value={value} onChange={handleChangeInput} placeholder={'Написать дело'}/>
        <Button onClick={handleCreateTodo} name={'Добавить'}/>
        {error && <p className='error'>{error.massage}</p>}
        <Button name='save localStorage' onClick={saveLocalStorage}/>
        </div>
    )
}