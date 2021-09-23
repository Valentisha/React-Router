import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "../Components/ProgressBar";
import CategoryListContainer from "./CategoryListContainer";

function ProgressBarContainer () {
const {category} = useSelector((state) => state.reducerCategory);
const filterCategory = category.filter((item) => item.checked);
const completedCategory = (100 * filterCategory.length) / category.length;


    return <ProgressBar completedCategory={completedCategory}/>
}

export default ProgressBarContainer;