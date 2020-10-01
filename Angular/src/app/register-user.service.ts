import { Injectable } from '@angular/core';

import { Register } from './registerUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  private heroesUrl = 'api/register';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  /** POST: add a new Register to the server */
  addHero(register: Register): Observable<Register> {
    return this.http.post<Register>(this.heroesUrl, register, this.httpOptions);
  }
}
