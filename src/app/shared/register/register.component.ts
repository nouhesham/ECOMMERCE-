import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchpassword } from 'src/app/matchvalidator/matchvalidator.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerform: FormGroup;
  constructor(private router: Router) {
    this.registerform = new FormGroup(
      {
        Name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",<.>/?]).{8,}$/
          ),
        ]),
        UserName: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\S*$/),
        ]),
        confirmpassword: new FormControl('', [Validators.required]),
      },
      { validators: matchpassword }
    );
  }

  handlesubmit() {
    console.log(this.registerform);
    console.log(this.registerform.validator);
    this.router.navigate(['submitdone']);
  }
}
