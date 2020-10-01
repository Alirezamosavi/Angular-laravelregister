import { Injectable } from '@angular/core';
import { Register } from './register';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private heroesUrl = 'api/register';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  /** POST: add a new hero to the server */
  addHero(hero: Register): Observable<Register> {
    return this.http.post<Register>(this.heroesUrl, hero, this.httpOptions);
  }
}
