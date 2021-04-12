import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string
  public $token: Subject<string> = new Subject<string>()
  private user: User
  public $user: Subject<User> = new Subject<User>()
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{token:string}> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'responseType': 'json'
      })
    };
    let headers = new Headers({ 'Content-Type': 'application/json', 'responseType': 'json', });
    let body = {
      email: email,
      password: password
    }
    return this.http.post<any>(`${environment.apiUrl}users/login`, body, httpOptions)
  }

  getCurrentUser(isHttpReq: boolean = true) {
    let result
    if (isHttpReq) {
      const header = new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
      result = this.http.get<User>(`${environment.apiUrl}users/me`, { headers: header })
    } else {
      result = {...this.user}
    }
    return result
  }

  isLoggedIn() {
    let result: boolean = false
    if (this.token) {
      result = true
    }
    return result
  }

  setToken(token: string) {
    this.token = token
    this.emitToken()
  }

  getToken() {
    return this.token
  }

  emitToken() {
    this.$token.next(this.token)
  }

  setUser(user: User) {
    this.user = user
    this.emitUser()
  }

  emitUser() {
    this.$user.next(this.user)
  }
}
