import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'sprint_angular';

  constructor (private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.apiService.buscarVehicles().subscribe()
  }

}
