import { Injectable } from "@angular/core";
import {  AbstractControl, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";
import { AuthService } from "../auth.service";



@Injectable({
  providedIn: 'root'
})
export class CheckUsername implements AsyncValidator {

  constructor(private authService: AuthService) {}
  validate = (control: FormControl):any => {
    const { value } = control;

    return this.authService.checkUserName(value).pipe(
      map((data) => {
        console.log(data)
        if (data.available) {
          return null;
        }
      }),
      catchError(err => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
