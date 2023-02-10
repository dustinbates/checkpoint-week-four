import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandBoxApi } from "./AxiosService.js"

class TodosService {
    async getTodoList() {
        const res = await sandBoxApi.get('/dustin/todos')
        const newArray = res.data.map(todo => new Todo(todo))
        appState.todos = newArray
    }

}

export const todosService = new TodosService()