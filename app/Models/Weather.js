export class Weather {
    constructor(data){
        this.name = data.name
        this.temp = data.main.temp
        this.tempC = Math.floor(data.main.temp) - 273
        this.tempF = Math.floor(this.tempC * 9/5) + 32
        this.isF = true
    }

    get WeatherTemplate(){
        const temp = this.isF ? this.tempF : this.tempC
        return /*html*/ `
        <div class="d-block mx-2 my-3 " onclick="app.weatherController.changeTemp()">
            <span class="d-flex flex-row">
                <h2 id="temp">${temp}</h2>
                <p id="temp-type"></p>
            </span>
            <h5 class="">${this.name}</h5>
        </div>
        `
    }
}