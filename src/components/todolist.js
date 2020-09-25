import React, { useContext } from 'react'
import { TodoContext } from '../Provider/todo';
import "./todoList.css"
const TodoList = () => {
            const { todos, removeTodo, editTodo } = useContext(TodoContext);

            return (
                        <>
                                    { todos.length > 0 && todos.map(input => (
                                                <div className='todoList' key={input.id}>

                                                            <p><h1>{input.todo}</h1>
                                                                        <span className="edit" onClick={() => editTodo(input.id)}> &#9998;</span>
                                                                        <span className="delete" onClick={() => removeTodo(input.id)}>&#10005;</span></p>

                                                </div>
                                    ))}
                        </>
            )
}

export default TodoList;
