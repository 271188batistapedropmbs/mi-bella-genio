import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  email: string;
  password: string;

  constructor(private _fb: FormBuilder, private _serviceLogin: LoginService, private router: Router ) { }

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

    this._serviceLogin.login(this.email, this.password).subscribe( resp => {
      localStorage.setItem('ApiToken', resp[0].token);
      localStorage.setItem('ApiUser', JSON.stringify(resp[0].user));

      if (resp[0].user.tipo === 'isAdmin') {
        this.router.navigate(['/admin']);
      } else if ( resp[0].user.tipo === 'isUser') {
        this.router.navigate(['/user']);
      } else {
        this.router.navigate(['/login']);
      }
    });

  }

}
