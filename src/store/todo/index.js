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
    REMOVE_TODO: 'REMOVE_TODO'
};

export const actionSetTodo = (payload) => ({ type: actionTypes.SET_TODO, payload });
export const actionRemoveTodo = (payload) => ({ type: actionTypes.REMOVE_TODO, payload });

// reducers 

export default function reducerTodo (state = initState, action){ 
    switch (action.type) {
        case actionTypes.SET_TODO:
           
        
   

            return {...state, todos: [...state.todos, action.payload] }

        case actionTypes.REMOVE_TODO:
           
        
            console.log(state, action)
            // debugger
            return {...state, todos: state.todos.filter((item) => item.id !== action.payload)}
        default:

            return state;
    }


   // if (action.type ===  actionTypes.SET_TODO) {

   // } ifelse (action.type === actionTypes.REMOVE_TODO)  {

    //}

}