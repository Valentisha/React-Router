import React, {useState} from "react";
import { useDispatch } from "react-redux";
import AddCategory from "../Components/AddCategory";
import { useRouteMatch } from "react-router";
import {actionAddCategory} from '../store/category';


export default function AddCategoryContainer(){
    const dispatch = useDispatch();
    const match = useRouteMatch('/todo/:id');
    const matchTodoId = +match?.params.id;

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handlerChangeInput = (e) => {


        console.log(e)
        setValue(e.target.value);
    };

    const createAddCategory = () => {
        const data ={
            title: value,
            id: Date.now(),
            description: '',
            todoId: matchTodoId,
            chekend: false
        };
        if(!matchTodoId){
            return setError('Выберите todo')
        };
        dispatch(actionAddCategory(data));
        setValue('');
        setError('');
    };
    return <AddCategory  error={error} createAddCategory={createAddCategory} value={value} handlerChangeInput={handlerChangeInput}/>
};