import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _customerService: CustomerService) { }

  ngOnInit(): void {
  }

  checkUserCredential(form: NgForm) {
    this._customerService.validateUserLogin(form.value.emailid, form.value.password).subscribe(
      responseStatus => console.log(responseStatus)
    ),
      responseError => console.log(responseError),
      () => console.log("Executed Successfully")
  }
}
