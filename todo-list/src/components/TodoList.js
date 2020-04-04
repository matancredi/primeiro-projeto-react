import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { List } from 'antd'
import {useSelector} from 'react-redux'

//crie uma forma de popular o componente List com o componente Todo de acordo os as possíveis pros passadas ao TodoList

export default function TodoList() {
    const toDoList = useSelector(state => state.toDoList)
    return (
        <List bordered style={{width: "100%", margin: "0 auto"}}>
        <ul>
            {toDoList.length > 0 && toDoList.map(item => (
                <li key={item}>{item}</li>
            ))}
            {toDoList.lenght === 0 && (<h3>Nothing to do here!</h3>)}
        </ul>
        </List>
    )
}

TodoList.propTypes = {
    
}