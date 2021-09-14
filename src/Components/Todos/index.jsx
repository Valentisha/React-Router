import React from "react";
import {Link} from 'react-router-dom';
import './styles.scss';
import EditIcon from "../Icons/Edit";
import RemoveIcon from "../Icons/Remove";


export default function Todos( {todos, handlerRemoveTodo} ) {
    return (
        <ul className='lists'>
            {todos.length ? todos.map((item) => {
                return <li key={item.id} className='list'>
                     <Link to={`/todo/${item.id}`}> 
                    <div className='list__group'>
                      <p className='list__paragraph'>
                        {item.title}
                      </p>
                      </div>
                      </Link>
                      <div className='icons'>
                      <EditIcon/>
                      <RemoveIcon onClick={() => handlerRemoveTodo(item.id)}/>
                      </div>  
                </li>
            }) : <p>Нет списка дел</p>}
        </ul>
    )
}