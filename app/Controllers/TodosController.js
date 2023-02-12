import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos(){
    let template = ''
    appState.todos.forEach(t => template += t.TodoList)
    setHTML('todoList', template)
}

export class TodosController {
    constructor(){
        this.getTodoList()
        appState.on('todos', _drawTodos)
    }

    async updateTodo(todoId){
        try {
            await todosService.updateTodo(todoId)
        } catch (error) {
            Pop.error(error)
            console.error(error.message)
        }
    }

    async removeTodo(todoId){
        try {
            if(await Pop.confirm()){
                await todosService.removeTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
            console.error(error.message)
        }
    }

    async createTodo(){
        try {
            window.event?.preventDefault()
            const form = window.event?.target
            const formData = getFormData(form)
            console.log(formData)
            // @ts-ignore
            form.reset()
            await todosService.createTodo(formData)
        } catch (error) {
            Pop.error(error)
            console.error(error.message)
        }
    }
    
    async getTodoList(){
        try {
            await todosService.getTodoList()
        } catch (error) {
            Pop.error(error)
            console.error(error.message)
        }
    }
}