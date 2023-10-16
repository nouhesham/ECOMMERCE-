import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-matchvalidator',
  templateUrl: './matchvalidator.component.html',
  styleUrls: ['./matchvalidator.component.css'],
})
export class MatchvalidatorComponent {}

export const matchpassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let password = control.get('password');
  let matchpas = control.get('confirmpassword');
  if (password && matchpas && password?.value != matchpas?.value) {
    return { passwordmatcherror: true };
  }
  return null;
};
