import React from 'react'
import {Provider} from 'react-redux'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import './App.css'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
    <Todo />
    <TodoList />
    </Provider>
  )
}

