import React from "react";
import { useSelector } from 'react-redux';
import './styles.scss';

export default function Todos(){
    const {todos} = useSelector((state) => state.reducerTodo);
    console.log(todos);
    return (
        <ul className='lists'>
            {todos.map((item) => {
                return <li key={item.id} className='list'>
                    {item.title}
                </li>
            })}
        </ul>
    )
}