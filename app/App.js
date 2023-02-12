import { ClocksController } from "./Controllers/ClocksController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  imagesController = new ImagesController()
  todosController = new TodosController()
  quotesController = new QuotesController()
  clocksController = new ClocksController()
  weatherController = new WeatherController()
}

window["app"] = new App();
