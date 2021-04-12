import { Injectable } from '@angular/core';
import { AuthService } from '../authentification/auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Planning } from '../models/planning';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  getPlanningList() {
    if (this.authService.getCurrentUser(false)) {
      const header = new HttpHeaders ({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
      return this.http.get<User>(`${environment.apiUrl}user-planning/${this.authService.getCurrentUser(false).id}/plannings`, { headers: header })
    } else {
      console.error('no user stored');
    }
  }

  getPlanning(id: number) {
    let result
    const header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    })
    return this.http.get<Planning>(`${environment.apiUrl}plannings/${id}`, { headers: header })
  }
  
  getBlocks(id: number) {
    let result
    const header = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authService.getToken()
    })
    return this.http.get<any[]>(`${environment.apiUrl}planning-block/${id}`, { headers: header })
  }
}
