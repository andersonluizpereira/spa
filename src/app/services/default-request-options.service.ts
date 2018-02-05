import { RequestOptionsArgs, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtTokenService } from './jwt-token.service';

@Injectable()
export class DefaultRequestOptionsService extends RequestOptions {

    constructor(private jwtToken: JwtTokenService) {
        super();
    }


    merge(options?: RequestOptionsArgs): RequestOptions {
        let headers = options.headers || new Headers();
        headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
        headers.set('Content-Type', 'application/json');
        options.headers = headers;
        return super.merge(options);
    }
}
