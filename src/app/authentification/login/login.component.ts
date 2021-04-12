import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private form: FormGroup
  private token: string
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
  }
  login() {    
    this.authService.login(this.form.get('email').value, this.form.get('password').value).pipe(
      switchMap(res => {
        if (res.token) {
          this.authService.setToken(res.token)
        } else {
          console.error(res);
        }
        return this.authService.getCurrentUser()  
      })
    )
    .subscribe((res: User) => {
      if (res) {
        this.authService.setUser(res)
        this.router.navigate(['/planning-list'])
      }
    }, error => {
        console.log(error);
        
        alert('ARHHHH')
    })
  }
}
