import React, { createContext, useState } from 'react';
import { addTodoItem, removeTodoItem, onEditTodo } from './utils';

export const TodoContext = createContext({
            todos: [],
            todoIn: '',
            addTodo: () => { },
            removeTodo: () => { },
            editTodo: () => { }
})


const TodoProvider = ({ children }) => {

            const [todos, setTodos] = useState([]);
            const [todoIn, setTodo] = useState("");

            const addTodo = item => setTodos(addTodoItem(todos, item))
            const removeTodo = item => setTodos(removeTodoItem(todos, item))
            const editTodo = item => {
                        setTodo(onEditTodo(todos, item))
                        setTodos(removeTodoItem(todos, item))
            }
            return (
                        <TodoContext.Provider
                                    value={{
                                                todos,
                                                addTodo,
                                                removeTodo,
                                                todoIn,
                                                editTodo
                                    }}
                        >
                                    {children}
                        </TodoContext.Provider>
            )
}

export default TodoProvider;