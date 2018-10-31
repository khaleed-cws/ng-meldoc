import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, FormBuilder,  Validators , AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public currentJustify = 'justified';
  RegistrationForm: FormGroup;
  account_validation_messages: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.onRegitser();
  }
  private onRegitser() {
    console.log();
    this.RegistrationForm = this.fb.group({
           first_name : ['', Validators.required ],
           last_name :  ['', ],
           email: ['', Validators.required ],
           user_mobile : ['', Validators.required ],
           password : ['', Validators.required ],
           confirm_password: ['', Validators.required ]
     });

  }

  // public account_validation_messages = {
  //   'username': [
  //     { type: 'required', message: 'Username is required' },
  //     { type: 'minlength', message: 'Username must be at least 5 characters long' },
  //     { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
  //     { type: 'pattern', message: 'Your username must contain only numbers and letters' },
  //     { type: 'validUsername', message: 'Your username has already been taken' }
  //   ],
  //   'email': [
  //     { type: 'required', message: 'Email is required' },
  //     { type: 'pattern', message: 'Enter a valid email' }
  //   ],
  //   'confirm_password': [
  //     { type: 'required', message: 'Confirm password is required' },
  //     { type: 'areEqual', message: 'Password mismatch' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required' },
  //     { type: 'minlength', message: 'Password must be at least 5 characters long' },
  //     { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
  //   ],
  //   'terms': [
  //     { type: 'pattern', message: 'You must accept terms and conditions' }
  //   ]
  // }
}
