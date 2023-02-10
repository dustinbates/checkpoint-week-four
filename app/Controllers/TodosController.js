import { todosService } from "../Services/TodosService.js";
import { Pop } from "../Utils/Pop.js";

export class TodosController {
    constructor(){

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