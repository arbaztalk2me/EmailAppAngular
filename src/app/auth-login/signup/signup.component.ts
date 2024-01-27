import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordMatcher } from '../validators/password-matcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  authSignUpFormData=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    password:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    confirmPassword:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)])
  },{validators:[this.passwordMatcher.validate]})

  constructor(private passwordMatcher:PasswordMatcher) { }

  ngOnInit(): void {
  }

}
