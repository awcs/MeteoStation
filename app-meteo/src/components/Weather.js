import React, {Component} from "react";

class Weather extends Component {

    constructor(){
        super();
        this.state ={
    
          temp : 0,
          windSpeed : 0,
          name : "",
          icon : "",
          iconDescrib : "",
          humitdity : 0
    
        }
      }
      
    
      getWeather = (lat, lon) => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=271acc6cd729718d8e20640948e251a2`)
          .then(response => response.json())
          .then(json =>
          {this.setState({temp : json.main.temp, humidity : json.main.humidity, icon : json.weather[0].icon, iconDescrib : json.weather[0].description, name : json.name, windSpeed : json.wind.speed})})
        }
      
      componentDidMount = () => {
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
    
          this.getWeather(position.coords.latitude, position.coords.longitude);
        
          
        })
      } else {
        console.log("Error coordinates not found !")
      }
      }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="meteo"/>
                <p>{this.state.windSpeed}m/s</p>
                <p>{this.state.temp}°C</p>
                <p>{this.state.iconDescrib}</p>
                <p>{this.state.humidity}%</p>
            </div>
        )
    }
}
export default Weather ; 