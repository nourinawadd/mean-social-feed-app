import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({ email: this.email, password: this.password })
      .subscribe(() => alert('Registration successful'));
  }
}
