import reducerTodo from "../todo";

const initState = {
    category: [
        {title: 'Category', checked: false, description: "описание", id: 1, todoId: 2}
    ]
};

const actionTypes = {
    SET_CATEGORY: 'SET_CATEGORY',
    UPDATE_CATEGORY: 'UPDATE_CATEGORY',

}

export const actionAddCategory = (payload) => {
    
    return ({type: actionTypes.SET_CATEGORY, payload})};

export const actionUpdateCheckbox = (payload) => ({type: actionTypes.UPDATE_CATEGORY, payload})

export default function reducerCategory(state = initState, action){ 

    switch (action.type) {
        case actionTypes.SET_CATEGORY:
            return {...state, category: [...state.category, action.payload]};
            
        case actionTypes.UPDATE_CATEGORY:
            return {...state, category: state.category.map((item) => item.id === action.payload.id ? {...item, ...action.payload}: item)}
    
        default:
            return state;
    }
}