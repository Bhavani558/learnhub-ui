import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../../models/register';
import { LoginResponse } from '../../models/login-response';
import { LoginRequest } from '../../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8081/api/auth';

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  login(loginData: LoginRequest){
    return this.http.post<LoginResponse>(
        'http://localhost:8081/api/auth/login',
        loginData
    );
}

}