// state
const initState = {
    todos: [
        {title: "Купить овощи", id: 1}, 
        {title: "Купить фрукты", id: 2}
    ]
 } 

// actions 
const actionTypes = {
    SET_TODO: 'SET_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    GET_LOCALSTORAGE: 'GET_LOCALSTORAGE',
};

export const actionSetTodo = (payload) => ({ type: actionTypes.SET_TODO, payload });
export const actionRemoveTodo = (payload) => ({ type: actionTypes.REMOVE_TODO, payload });
export const actionEditTodo = (payload) => ({ type: actionTypes.EDIT_TODO, payload });
export const actionGetLocalStorageTodo = (payload) => ({type: actionTypes.GET_LOCALSTORAGE, payload});

// export const getThunkLoadTodos = (id) => async (dispatch) => {
//     try{
//         const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const result = await data.json();
//         dispatch(actionSetTodo(result));
//     } catch (error){
//         console.log(error)
//     }

// };

// reducers 
export default function reducerTodo (state = initState, action){ 
    switch (action.type) {
        case actionTypes.SET_TODO:


            return {...state, todos: [...state.todos, action.payload] }

        case actionTypes.REMOVE_TODO:
            console.log(state, action)
            return {...state, todos: state.todos.filter((item) => item.id !== action.payload)}

        case actionTypes.EDIT_TODO:
            return {...state, todos: state.todos.map((item)=>item.id === action.payload.id ? {...item, ...action.payload} : item)}; 

        case actionTypes.GET_LOCALSTORAGE:
            return {...state, todos: [...state.todos, ...action.payload]}
         default:
            return state;
    };

}