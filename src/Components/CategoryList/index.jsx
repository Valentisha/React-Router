import React from "react";
import './style.scss';
import { useRouteMatch } from "react-router";

export default function CategoryList({category}) {
    const match = useRouteMatch('/todo/:id');
    const matchTodoId = +match?.params.id;

    return (
        <ul className="categories">
            {category.map((item) => {
                return item.todoId === matchTodoId ? <li key={item.id} className="category">
                    {item.title}
                </li> : null
            })}  
        </ul>
    )
}