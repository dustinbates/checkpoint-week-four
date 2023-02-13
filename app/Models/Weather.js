export class Weather {
    constructor(data){
        this.name = data.name
        this.temp = data.main.temp
        this.tempC = Math.floor(data.main.temp) - 273
        this.tempF = Math.floor(this.tempC * 9/5) + 32
        this.isF = true
        this.clouds = data.clouds.all
    }

    get WeatherTemplate(){
        const temp = this.isF ? this.tempF : this.tempC
        return /*html*/ `
        <div class="weather m-2 " onclick="app.weatherController.changeTemp()">
            <span class="d-flex flex-row">
                <h2 class="text-light" id="temp">${temp}</h2>
                <p class="mt-1 text-light" id="temp-type"></p>
            </span>
            <h5 style="font-family: fantasy">${this.name}</h5>
        </div>
        `
    }
}