import reducerTodo from "../todo";

const initState = {
    category: [
        {title: 'Category', checked: false, description: "описание", id: 1, todoId: 2}
    ]
};

const actionTypes = {
    SET_CATEGORY: 'SET_CATEGORY',

}

export const actionAddCategory = (payload) => {
    
    return ({type: actionTypes.SET_CATEGORY, payload})};

export default function reducerCategory(state = initState, action){ 

    switch (action.type) {
        case actionTypes.SET_CATEGORY:
          
            return {...state, category: [...state.category, action.payload]};
    
        default:
            return state;
    }
}