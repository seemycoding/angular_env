import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './enviroment/enviroment.common';

    //required when enviroment variable is loaded by main.ts file no config service and app_initializer is required here

// function loadConfig(): Promise<void> {
//   return fetch('/assets/config/config.json')
//     .then(response => response.json())
//     .then(config => {
//       // Assign loaded config to the environment
//       environment.apiUrl = config.apiUrl;
//       environment.production = config.production;
//       environment.environment=config.enviroment
//     })
//     .catch(error => {
//       console.error('Could not load configuration:', error);
//       // Handle the error or fallback to default configuration
//     });
// }

// Load the configuration, then bootstrap the application
// loadConfig().then(() => {
  
// });
bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));