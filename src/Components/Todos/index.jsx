import React from "react";
import { Button } from "../Button/Button";
import './styles.scss';

export default function Todos( {todos, handlerRemoveTodo} ) {
    return (
        <ul className='lists'>
            {todos.length ? todos.map((item) => {
                return <li key={item.id} className='list'>
                    <div className='list__group'>
                    <p className='list__paragraph'>{item.title}</p>
                    <Button name="Удалить" onClick={() => handlerRemoveTodo(item.id)}/>
                    </div>
                </li>
            }) : <p>Нет списка дел</p>}
        </ul>
    )
}