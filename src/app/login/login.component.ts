import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { LoginService } from './login.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('client1@orsys.fr', Validators.pattern('/^[a-z0-9._%+-]+@orsys.fr$/')),
      //
      password: new FormControl('12345678', Validators.pattern('/^[0-9]{2,8}$/'))
      //
    })
  }

  loginSubmit() {
    const { username, password } = this.loginForm.value
    const loginParams = {
      username, password
    }
    this.router.navigate(['/annonce']);

  }
}
