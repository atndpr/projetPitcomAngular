import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface LoginForm {
  username:string
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {
    this.http.post(`http://localhost:8080/api/auth`, loginForm)
  }
}
