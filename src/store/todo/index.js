const initState = {
    todos: [
        {title: "Купить овощи", id: 1}, 
        {title: "Купить фрукты", id: 2}
    ]
 } 

const actionTypes = {
    SET_TODO: 'SET_TODO'
};

export const actionSetTodo = (payload) => ({ type: actionTypes.SET_TODO, payload })

export default function reducerTodo (state = initState, action){ 
    switch (action.type) {
        case actionTypes.SET_TODO:
             return{...state, todos: [...state.todos, action.payload] }
        default:
            return state;
    }
}