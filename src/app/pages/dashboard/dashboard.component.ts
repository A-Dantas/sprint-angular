import { Component, afterNextRender } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleData } from '../../models/vehicleData.model';


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

  vinDigitado: string = '';

  dadosDoVeiculo?: VehicleData;

  constructor(private apiService: ApiService) {
    
    this.returnVehicles();
    this.returnVehiclesData();

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

  returnVehiclesData() {
    
    this.apiService.buscarVehicleData(this.vinDigitado).subscribe({
      next: (vehicleData) => {
        this.dadosDoVeiculo = vehicleData;                
      }
    })
  }
}
