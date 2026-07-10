import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { AuthService } from '../../core/services/auth';
import { RegisterRequest } from '../../models/register';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(private authService: AuthService) {}
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  role: string = '';
  password: string = '';
  confirmPassword: string = '';

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

 register(): void {

  if (
    !this.firstName ||
    !this.email ||
    !this.password ||
    !this.confirmPassword
  ) {
    alert('Please fill all the fields.');
    return;
  }

  if (this.password !== this.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const registerData: RegisterRequest = {

    name: this.firstName+" "+this.lastName,
    email: this.email,
    password: this.password

  };

  this.authService.register(registerData).subscribe({

    next: (response) => {

      console.log(response);
      alert("Registration Successful!");

      this.firstName = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';

    },

    error: (error) => {

      console.error(error);
      alert("Registration Failed!");

    }

  });

}}
