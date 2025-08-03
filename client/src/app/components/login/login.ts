import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe(() => alert('Login successful'));
  }
}
