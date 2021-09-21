import React from "react";
import {Link} from 'react-router-dom';
import './styles.scss';
import EditIcon from "../Icons/Edit";
import RemoveIcon from "../Icons/Remove";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";


export default function Todos({isShow, 
    todoId, 
    handlerChange, 
    updateTitle, 
    handlerShowTodo, 
    handlerClose,
    todos, 
    error,
    handlerUpdateTodo,
    handlerRemoveTodo}) {
    return (
        <ul className='lists'>
            {todos.length ? todos.map((item) => {
                return <div key={item.id}>
                <li  className='list'>
                     <Link to={`/todo/${item.id}`}> 
                    <div className='list__group'>
                      <p className='list__paragraph'>
                        {item.title} 
                      </p>
                      </div>
                      </Link>
                      <div className='icons'>
                      <EditIcon onClick={() => handlerShowTodo(item.id, item.title)}/>
                      { <RemoveIcon onClick={() => handlerRemoveTodo(item.id)}/>}
                      {/* { item.id === todoId && isShow || <RemoveIcon onClick={() => handlerRemoveTodo(item.id)}/>} */}
                     
                      </div>  
                </li>
                {item.id === todoId && isShow && 
                <>
                     <Input value={updateTitle} onChange={handlerChange} placeholder='edit'/>
                     <Button name='Сохранить' onClick={() => handlerUpdateTodo(item.id)}/>
                     <Button name='Закрыть' onClick={handlerClose}/>
                     {error && <p className='error'>{error.massage}</p>}
                     </>
            }
                </div>
            }) : <p>Нет списка дел</p>}
        </ul>
    )
}