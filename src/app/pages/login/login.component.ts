import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  
  nomeLogin?: string;
  senhaLogin?: string;
  
  constructor (private apiService: ApiService, private router: Router) {}

  testarLogin() {
    this.apiService.fazerLogin({ nome: this.nomeLogin, senha: this.senhaLogin }).subscribe({
      next: () => {
        alert('Login feito com sucesso');
        this.router.navigate(['/home']);
      },

      error: (erro: Error) => {
        alert('Login sem sucesso. Nome ou senha inválido.');
      },
    });
  }
}
