import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  registerUser(email: string, password: string): Observable<any>{
    return this.http.post(`${this.url}/createNewUser`, { email, password });
  }
  
}
