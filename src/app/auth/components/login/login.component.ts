import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private loginService: LoginService,
    private  authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.loginService.login(this.formLogin.value).subscribe(res => {
      this.authService.authenticate(res);
      this.router.navigate(['/students']);

    });
  }
}
