import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { StringToken } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:3001/';
  
  constructor(private http: HttpClient){
    
  }
  
  fazerLogin(dadosLogin: any) {
    return this.http.post(this.urlApi + 'login', dadosLogin);
  }

  buscarVehicles() {
    return this.http.get(this.urlApi + 'vehicles');
  }

  buscarVehicleData(vehicleInfo: string) {

    const body = { vin: vehicleInfo }

    return this.http.post(this.urlApi + 'vehicleData', body);
  } 
}
