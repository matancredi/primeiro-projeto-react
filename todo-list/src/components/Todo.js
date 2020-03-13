import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addToDo} from '../actions'
import PropTypes from 'prop-types'
import { List, Typography } from 'antd'

const { Item } = List
const { Text } = Typography

export default function Todo(props) {
    const [toDoItem, setToDoItem] = useState('')
    const dispatch = useDispatch()
    const addToDoItem = () => dispatch(addToDo(toDoItem))

    return (
        <Item >
        <Text>
            <input type="text" onChange={({target: {value}}) => setToDoItem(value)} />
            <button onClick={addToDoItem}>Add To Do</button>
        </Text>
        </Item>
    )
}

Todo.propTypes = {
    
}