export class Todo{
    constructor(data){
        this.completed = data.completed
        this.description = data.description
        this.id = data.id 
        this.completed = data.completed || false
    }



    get TodoList(){
        return `
        <div class="d-flex m-2 justify-content-between align-items-center " >
            <input ${this.completed ? 'checked' : ''} onchange="app.todosController.updateTodo('${this.id}')" class="checkbox me-2" type="checkbox" value="" id="flexCheckDefault">
            <p class="text-light p-0 m-0"><b>${this.description}</b></p>
            <i class="mdi mdi-trash-can text-light selectable fs-5" onclick="app.todosController.removeTodo('${this.id}')"></i>
        </div>
        `
    
    }
}
