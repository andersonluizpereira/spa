import { JwtTokenService } from './jwt-token.service';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Http } from '@angular/http';
const USER_KEY = 'user';
@Injectable()
export class AuthService {

  public check: Boolean = false;
  constructor(private jwtToken: JwtTokenService, private http: Http,
    private localStorage: LocalStorageService) {
   this.check = this.jwtToken.token ? true : false;

   }

   logout() {
    this.jwtToken.token = null;
    this.check = false;
    this.localStorage.remove(USER_KEY);
}

}
