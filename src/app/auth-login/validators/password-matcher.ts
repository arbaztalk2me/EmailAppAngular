import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PasswordMatcher implements Validator {
  validate(form: AbstractControl) {
    let { password, confirmPassword } = form.value;
    if (password === confirmPassword) {
      return null;
    }
    return { passwordNotMatch: true };
  }
}
