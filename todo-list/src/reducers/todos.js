const INITIAL_STATE = {
    toDoList:['Estudar react']
}

export default function todos (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TO_DO': 
            return {...state, toDoList: [...state.toDoList, action.text]}
        default:
            return state
    }
}