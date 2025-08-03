import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    this.authService.register({ email: this.email, password: this.password })
      .subscribe({
        next: () => this.router.navigate(['/login']), // navigate after successful registration
        error: (err) => alert('Registration failed: ' + err.error.message)
      });
  }
}
