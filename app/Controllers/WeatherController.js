import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawWeather(){
    setHTML('weather', appState.weather.WeatherTemplate)

    if (appState.weather.isF == true){
        setHTML('temp-type', `<i class="mdi mdi-temperature-fahrenheit fs-3"></i>`)
    }
    else{
        setHTML('temp-type', `<i class="mdi mdi-temperature-celsius fs-3"></i>`)
    }
}

export class WeatherController {
    constructor(){
        this.getWeather()
        appState.on('weather', _drawWeather)
    }

    async getWeather(){
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.error(error.message)
        }
    }

    changeTemp(){
        appState.weather.isF = !appState.weather.isF
        appState.weather = appState.weather
        
    }
}