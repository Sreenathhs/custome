import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern("/^[A-Za-z]+$/")]],
      lastname: ['', [Validators.required, Validators.pattern("/^[A-Za-z]+$/")]],
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z]%/@gmail.com")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required, this.checkDob]],
      contact: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitRegistrationForm(form: FormGroup) {
    console.log(form.value.gender);
    console.log(form.valid);
  }

  checkDob(controlValue: FormControl) {
    var currentdate = new Date();
    var givendate = controlValue.value;
    if (givendate >= currentdate || givendate == null)
      return false;
    return true;
  }
}
