import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionSetTodo } from "../../store/todo";
import {Button} from '../Button/Button';
import {Input} from '../Input/Input';


export default function AddTodo() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()


    const handleChangeInput = (e) => {
        setValue(e.target.value)
    };

    const handleCreateTodo = () => {
        const data = {
            title: value,
            id: Date.now
        }
        dispatch(actionSetTodo(data));
        setValue('');
    }

    return (
        <>
        <Input value={value} onChange={handleChangeInput}/>
        <Button onClick={handleCreateTodo}/>
        </>
    )
}