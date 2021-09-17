import React from "react";
import './style.scss';
import { useRouteMatch } from "react-router";
import Checkbox from "../Checkbox";

export default function CategoryList({category, handlerChecked}) {
    const match = useRouteMatch('/todo/:id');
    const matchTodoId = +match?.params.id;

    return (
        <ul className="categories">
            {category.map((item) => {
                return item.todoId === matchTodoId ? <li key={item.id} className="category">
                    <div className="category__check">
                    {item.title}
                    <input type="checkbox" checked={item.cheked} onChange={(e) => handlerChecked(e, item.id)}/>
    
                    </div>
                </li> : null
            })}  
        </ul>
    )
}