import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./todoInput.css";
import { TodoContext } from '../Provider/todo'
const TodoInput = () => {

            const { addTodo, todoIn } = useContext(TodoContext);
            console.log(todoIn);
            const [todoData, setTodo] = useState({
                        id: "",
                        todo: '',

            });
            const { todo } = todoData;
            const onHandleChange = e => {
                        setTodo({
                                    ...todoData,
                                    id: uuidv4(),
                                    [e.target.name]: e.target.value

                        })
            }

            const onHandleSubmit = e => {
                        e.preventDefault();

                        addTodo(todoData);
                        setTodo({
                                    ...todoData,
                                    id: '',
                                    todo: ''
                        })
            }
            return (
                        <form onSubmit={onHandleSubmit} className='todoInput'>
                                    <input type="text"
                                                name="todo"
                                                placeholder="Add Todo"
                                                value={todo || todoIn}
                                                autoCapitalize="true"
                                                onChange={onHandleChange}
                                    />
                                    <button type="submit">Add</button>
                        </form>
            )
}

export default TodoInput;
