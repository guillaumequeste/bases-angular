import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Dieppe&units=metric&lang=fr&appid=51fc8505d55fe845e4c757ea6b9ff0cf')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data){
    this.WeatherData = data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp).toFixed(2);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(2);
  }

}
