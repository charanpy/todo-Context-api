export const addTodoItem = (todos, item) => ([...todos, item])
export const removeTodoItem = (todos, item) => (todos.filter(todo => todo.id !== item))

export const onEditTodo = (todos, item) => {
            const todoInput = todos.find(todo => todo.id === item);

            return todoInput.todo;
}