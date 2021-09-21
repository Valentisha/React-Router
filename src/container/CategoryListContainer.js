import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../Components/CategoryList";
import { actionUpdateCheckbox } from "../store/category";
import { useRouteMatch } from "react-router";


export default function CategoryListContainer(){
    const {category, filterCategory} = useSelector((state) => state.reducerCategory);
    const match = useRouteMatch('/todo/:id')
    const matchTodoId = +match?.params.id;

    const dispatch = useDispatch()

    const handlerChecked=(e, categoryId) => {
        const data = {
            checked: e.target.checked,
            id: categoryId
        };
        dispatch(actionUpdateCheckbox(data)) 
    }

    switch (filterCategory) {
        case 'all':
            return <CategoryList
              category={category}
                handlerChecked={handlerChecked}/>
        case 'filterActive': 
            return <CategoryList
                            category={category.filter((item) => item.checked)}
                    handlerChecked={handlerChecked} />;
        case 'filterImportant':
            return <CategoryList
                            category={category.filter((item) => item.important)}
                    handlerChecked={handlerChecked} />;
        default:
            return <CategoryList
                        category={category}
                    handlerChecked={handlerChecked}/>;
    };

     
   
    
}