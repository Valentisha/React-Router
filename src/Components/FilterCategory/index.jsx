import React from "react";
import { useDispatch } from "react-redux";
import { actionStatusAll, actionStatusFilterActive, actionStatusImportant } from "../../store/category/index";
import {Button} from '../Button/Button';

export default function FilterCategory(){
    const dispatch = useDispatch();
    const handleStatusAll = () => {
        dispatch(actionStatusAll());
    }
    const handleStatusFilterActive = () => {
        dispatch(actionStatusFilterActive());
    }

    const handleStatusFilterImportant = () => {
        dispatch(actionStatusImportant());
    }
    return (
        <div>
            <Button name="Показать все категории" onClick={handleStatusAll}/>
            <Button name="Показать выполненные категории" onClick={handleStatusFilterActive}/>
            <Button name="Приоритетные категории" onClick={handleStatusFilterImportant}/>
        </div>
    )
}