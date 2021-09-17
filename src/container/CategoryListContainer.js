import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../Components/CategoryList";
import { actionUpdateCheckbox } from "../store/category";


export default function CategoryListContainer(){
    const {category} = useSelector((state) => state.reducerCategory);
    const dispatch = useDispatch()

    const handlerChecked=(e, categoryId) => {
        const data = {
            checked: e.target.checked,
            id: categoryId
        };
        dispatch(actionUpdateCheckbox(data)) 
    }

    return <CategoryList category={category} 
    handlerChecked={handlerChecked} />
}