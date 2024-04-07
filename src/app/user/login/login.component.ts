import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  returnUrl: string = '';
 
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}


  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  login():void {
    if(this.loginForm.invalid){
      const { email, password }= this.loginForm.value
      return this.userService.login(email!, password!)
    }
   
  }
  get fc() {
    return this.loginForm.controls;
  }
}
