import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor() { }

  setToken(token: any): void {
  	localStorage.setItem('token', token);
  }

  getToken(): any {
  	return localStorage.getItem('token');
  }

  isLogged(): boolean {
  	return this.getToken() ? true : false;
  }

  clearToken(): void {
  	localStorage.clear();
  }
}
