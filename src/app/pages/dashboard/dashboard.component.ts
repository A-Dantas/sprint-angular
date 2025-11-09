import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  
  listaVehicles?: Vehicle[];

  veiculoSelecionado?: Vehicle;

  constructor(private apiService: ApiService) {
    
    this.returnVehicles();
    
  }

  returnVehicles() {
    this.apiService.buscarVehicles().subscribe({
      next: (vehicles) => {
        this.listaVehicles = vehicles;
      },

      error: (err: Error) => {
        console.log("Erro")
      }
      
    });
  }
}
