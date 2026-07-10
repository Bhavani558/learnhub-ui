import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private authService: AuthService, private router: Router){}
  email: string = '';
  password: string = '';
login() {

  const loginData = {

    email: this.email,
    password: this.password

  };

  this.authService.login(loginData).subscribe({

    next: (response) => {

      console.log(response);

      localStorage.setItem("token", response.token);

      alert("Login Successful");

      this.router.navigate(['/student/dashboard']);

    },

    error: (error) => {

      console.error(error);

      alert("Invalid Email or Password");

    }

  });

}

}