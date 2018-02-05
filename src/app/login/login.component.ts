import { Http, RequestOptions, Headers } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Usuario } from './login';
import { JwtTokenService } from '../services/jwt-token.service';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  redirectAfterLogin = ['/products/list'];
  user = {
    userID: '',
    accesskey: ''
};

  constructor(private http: Http, private jwtToken: JwtTokenService, private router: Router, private auth: AuthService) {

   }

  ngOnInit() {
  }
      login(){
        let requestOptions = new RequestOptions();
        requestOptions.headers = new Headers();
        requestOptions.headers.set('Content-Type', 'application/json');

        this.http.post('http://localhost:52094/api/login', this.user, requestOptions)
        .toPromise()
        .then(response => {
          this.auth.check = true;
          this.jwtToken.token = response.json().accessToken;
          this.router.navigate(this.redirectAfterLogin);
        });
        }
      }
