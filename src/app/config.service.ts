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
    return this.http.get('/assets/config/config.json')
      .toPromise()
      .then((config: any) => {
        environment.apiUrl = config.apiUrl;
        environment.production = config.production;
        environment.environment=config.enviroment
      })
      .catch((error) => {
        console.error('Could not load configuration:', error);
      });
  }
  //till here

}
