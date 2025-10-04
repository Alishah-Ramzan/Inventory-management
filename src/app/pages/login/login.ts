import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: '../../app.css'
})
export class Login {
  loginData: LoginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      console.log('Login attempt:', this.loginData);
      // Here you would typically call an authentication service
      // For now, just log the data
      alert('Login attempt with email: ${this.loginData.email}');
    }
  }

  forgotPassword() {
    console.log('Forgot password clicked');
    // Here you would typically navigate to forgot password page
    alert('Forgot password functionality would be implemented here');
  }

  goToRegister() {
    console.log('Go to register clicked');
    // Here you would typically navigate to register page
    alert('Navigate to register page functionality would be implemented here');
  }
}