import React from "react";
import { useSelector } from "react-redux";
import CategoryList from "../Components/CategoryList";


export default function CategoryListContainer(){
    const {category} = useSelector((state) => state.reducerCategory);
    return <CategoryList category={category}/>
}