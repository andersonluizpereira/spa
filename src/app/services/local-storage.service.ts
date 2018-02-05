import { Injectable } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    set(key, value) {
        window.localStorage[key] = value;
        return this;
    }

    get(key, defaultValue = null) {
        return window.localStorage[key] || defaultValue;
    }

    setObject(key, value: Object) {
        window.localStorage[key] = JSON.stringify(value);
        return this;
    }

    getObject(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    remove(key) {
        window.localStorage.removeItem(key);
        return this;
    }

}
