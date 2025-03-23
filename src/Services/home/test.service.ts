import { Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../../dtos/WeatherForecast';
import { environment } from '../../environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  getWeatherForecastSignal(): Signal<WeatherForecast[]> {
    return toSignal(this.http.get<WeatherForecast[]>(environment.url), {
      initialValue: [],
    });
  }
}
