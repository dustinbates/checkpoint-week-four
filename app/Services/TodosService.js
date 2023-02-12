import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandBoxApi } from "./AxiosService.js"

class TodosService {
    
    async updateTodo(todoId) {
        const todoIndex = appState.todos.findIndex(t => t.id == todoId)
        const foundTodo = appState.todos[todoIndex]
        console.log(foundTodo);
        const res = await sandBoxApi.put(`/dustin/todos/${todoId}`, {completed: !foundTodo.completed})
        console.log('update todo', res.data);
        appState.todos.splice(todoIndex, 1, new Todo(res.data))
        appState.emit('todos')
    }

    async removeTodo(todoId) {
        const res = await sandBoxApi.delete('/dustin/todos/' + todoId)
        console.log('removing todo', res.data);
        appState.todos = appState.todos.filter(todo => todo.id != todoId)
    }

    async createTodo(formData) {
        const res = await sandBoxApi.post('/dustin/todos', formData)
        console.log('create todo', res.data);
        let todo = new Todo(res.data)
        appState.todos.push(todo)
        appState.emit('todos')
    }

    async getTodoList() {
        const res = await sandBoxApi.get('/dustin/todos')
        const newArray = res.data.map(todo => new Todo(todo))
        appState.todos = newArray
        console.log(res.data);
    }

}

export const todosService = new TodosService()