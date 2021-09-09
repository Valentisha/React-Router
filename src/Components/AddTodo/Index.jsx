import React from "react";
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';
import './style.scss';


export default function AddTodo({value, handleCreateTodo, handleChangeInput, error}) {
  
    return (
        <>
        <Input value={value} onChange={handleChangeInput}/>
        <Button onClick={handleCreateTodo} name={'Добавить'}/>
        {error && <p className='error'>{error.massage}</p>}
        </>
    )
}