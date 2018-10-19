import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  email: string;
  password: string;

  constructor(private _fb: FormBuilder, private _serviceLogin: LoginService ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formLogin = this._fb.group({
      email : ['', [Validators.required, Validators.email]],
      clave : ['', [Validators.required]]
    });
  }


  onSubmit() {
    if (!this.formLogin.valid) {
      return;
    }
    this.email = this.formLogin.get('email').value;
    this.password = this.formLogin.get('clave').value;
    console.log(this.email, this.password);
    this._serviceLogin.login(this.email, this.password).subscribe((resp) => {
      console.log(resp);
      localStorage.setItem('ApiToken', resp.user.token);
      localStorage.setItem('ApiUser', JSON.stringify(resp.user.usuario));
    },
    (error) => {
      console.log(error);
    });

  }

}
