import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroment/enviroment.common';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}
    //required when enviroment variable is loaded by config services

loadConfig(): Promise<void> {
  return fetch('/assets/config/config.json')
    .then(response => response.json())
    .then(config => {
      // Assign loaded config to the environment
      environment.apiUrl = config.apiUrl;
      environment.production = config.production;
      environment.environment=config.enviroment
    })
    .catch(error => {
      console.error('Could not load configuration:', error);
      // Handle the error or fallback to default configuration
    });
}
  //till here

}
