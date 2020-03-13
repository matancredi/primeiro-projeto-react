import { createStore } from 'redux'
import todos from '../reducers/todos'

//você precisa criar as store, lembra?
const store = createStore(todos)

export default store