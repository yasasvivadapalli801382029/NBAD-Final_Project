import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        alert('Login successful!');
        window.location.href = '/dashboard'; // Redirect to dashboard
      },
      (error) => {
        alert('Invalid username or password');
      }
    );
  }
}
