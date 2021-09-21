// import reducerTodo from "../todo";

const initState = {
    category: [
        {title: 'Category', checked: false, important: false, description: "описание", id: 1, todoId: 2}
    ],
};

const actionTypes = {
    SET_CATEGORY: 'SET_CATEGORY',
    UPDATE_CATEGORY: 'UPDATE_CATEGORY',
    STATUS_FILTER_ACTIVE: 'STATUS_FILTER_ACTIVE',
    STATUS_ALL: 'STATUS_ALL',
    STATUS_FILTER_IMPORTANT: 'STATUS_FILTER_IMPORTANT',
    UPDATE_IMPORTANT: 'UPDATE_IMPORTANT',

}

export const actionAddCategory = (payload) => {
    return ({type: actionTypes.SET_CATEGORY, payload})};

export const actionUpdateCheckbox = (payload) => ({type: actionTypes.UPDATE_CATEGORY, payload})
export const actionStatusFilterActive = () => ({type: actionTypes.STATUS_FILTER_ACTIVE})
export const actionStatusAll = () => ({type: actionTypes.STATUS_ALL})
export const actionUpdateImportant = (payload) => ({type: actionTypes.UPDATE_IMPORTANT, payload})
export const actionStatusImportant = () => ({type: actionTypes.STATUS_FILTER_IMPORTANT})

export default function reducerCategory(state = initState, action){ 

    switch (action.type) {
        case actionTypes.SET_CATEGORY:
            return {...state, category: [...state.category, action.payload]};
            
        case actionTypes.UPDATE_CATEGORY:
            return {...state, category: state.category.map((item) => item.id === action.payload.id ? {...item, ...action.payload}: item)}

        case actionTypes.STATUS_FILTER_ACTIVE:
             return {...state, filterCategory: 'filterActive'}

        case actionTypes.STATUS_ALL:
             return {...state, filterCategory: 'all'}

        case actionTypes.STATUS_FILTER_IMPORTANT:
            return {...state, filterCategory: 'filterImportant'}

        case actionTypes.UPDATE_IMPORTANT:
             return {...state, category: state.category.map((item) => item.id === action.payload.id ? {...item, important: action.payload.important} : item)}
    
        default:
            return state;
    }
}