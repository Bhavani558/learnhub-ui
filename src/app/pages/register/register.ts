import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

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
      !this.lastName ||
      !this.email ||
      !this.phone ||
      !this.role ||
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

    // UI Only (Backend integration later)
    console.log('Registration Successful');

    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      role: this.role,
      password: this.password
    });

    alert('Registration Successful!');

    // Clear the form
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.role = '';
    this.password = '';
    this.confirmPassword = '';
  }

}