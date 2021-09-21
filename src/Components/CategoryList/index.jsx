import React, {useState} from "react";
import './style.scss';
import { useRouteMatch } from "react-router";
import Important from "../Icons/Important";
import { useDispatch } from "react-redux";
import { actionUpdateImportant } from "../../store/category";

export default function CategoryList({category, handlerChecked}) {
    const match = useRouteMatch('/todo/:id');
    const [isImportant, setIsImportant] = useState(false)
    const dispatch = useDispatch();

    const matchTodoId = +match?.params.id;

    const handlerUpdateImportant = (categoryId) => {
        console.log(isImportant)
        const newValue = !isImportant; 
        setIsImportant(newValue)
        const data = {
            id: categoryId,
            important: newValue,
        }

        dispatch(actionUpdateImportant(data))

    }

    return (
        <ul className="categories">
            {category.map((item) => {
                return item.todoId === matchTodoId ? <li key={item.id} className="category">
                    <div className="category__item">
                        <p className={item.important ? "category__important" : ''}>
                           {item.title}
                    </p>
                    <div className="category__group-filter">
                         <input type="checkbox" checked={item.cheked} onChange={(e) => handlerChecked(e, item.id)}/>
                         <Important onClick={() => handlerUpdateImportant(item.id)}/>
                    </div>
                 </div>
             </li> : null
            })}  
        </ul>
    )
}