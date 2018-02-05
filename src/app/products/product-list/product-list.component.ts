import { AuthService } from './../../services/auth.service';
import { JwtTokenService } from './../../services/jwt-token.service';
import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Products } from './product';
import { DefaultRequestOptionsService } from '../../services/default-request-options.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Products[];
  constructor(private http: Http,
    private requestOptions: DefaultRequestOptionsService,
    private jwtToken: JwtTokenService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let requestOptions = new RequestOptions();
    requestOptions.headers = new Headers();
    requestOptions.headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
    requestOptions.headers.set('Content-Type', 'application/json');
    this.http.get('http://localhost:52094/api/produtos', requestOptions)
    .toPromise()
    .then(response =>
    this.products = response.json() || {}
    ).catch(
      this.products = null
    );

  }

}
