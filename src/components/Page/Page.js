import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import todoListSlice from '../../redux/TodoList';
import './Page.css'

const Page = () => {
    const [todo, setTodo] = useState();
    const dispatch = useDispatch()

    const todoList = useSelector(state => state.todoList)
    console.log(todoList);
    const handleInputChange = (e) => {
        setTodo(e.target.value)
    }
    const handleAddTodo = () => {
        dispatch(todoListSlice.actions.addNewTodo({ todo: todo }))
        setTodo("")
    }

    return (
        <div className='container'>
            <div className='list-todo'>
                <h1>TodoList</h1>

                <div>
                    {
                        todoList.listTodo.map(todo => {
                            return (
                                <>
                                    <div>
                                        {todo.todo}
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <input value={todo} onChange={handleInputChange} />
                <button onClick={handleAddTodo}>Add</button>
            </div>

        </div>
    )
}

export default Page