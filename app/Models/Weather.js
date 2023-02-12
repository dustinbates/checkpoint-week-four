export class Weather {
    constructor(data){
        this.name = data.name
        this.temp = data.main.temp
        
    }

    get WeatherTemplate(){
        return  `
        <p>${this.temp}</p>
        <p>${this.name}</p>
        `
    }
}