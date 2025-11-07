import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3001/';
  
  constructor(private http: HttpClient){
    
  }
  
  buscarVehicles() {
    return this.http.get(this.urlApi + 'vehicles');
  }

  fazerLogin() {
    return this.http.get(this.urlApi + 'login')
  }

  buscarVehicleData() {
    return this.http.get(this.urlApi + 'vehicleData')
  }
}
