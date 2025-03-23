import { Component, OnInit, Signal } from '@angular/core';
import { TestService } from '../../../../Services/home/test.service';
import { WeatherForecast } from '../../../../dtos/WeatherForecast';
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'home-index',
  templateUrl: './home-index-component.html',
  imports: [CommonModule],
})
export class HomeIndexComponent implements OnInit {
  weatherForecasts!: WeatherForecast[];

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.weatherForecasts = this.testService.getWeatherForecastSignal();
    console.log(this.weatherForecasts);
  }
}
