import { ImagesController } from "./Controllers/ImagesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  imagesController = new ImagesController()
  todosController = new TodosController()
}

window["app"] = new App();
