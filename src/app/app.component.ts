import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../enviroment/enviroment.common';
import { ConfigService } from './config.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  //coming from dynamically runtime loaded enviroment
  title = environment.environment

  


  
}
