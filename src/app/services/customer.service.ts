import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  validateUserLogin(emailid: string, password: string): Observable<string> {
    var response = this.http.post<string>("https://localhost:44375/api/Customer/LoginCustomerToApplication?emailId=" + emailid + "&password=" + password, null).pipe(catchError(this.errorHandler));
    return response;
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError(error.message || "Server error");
  }
}
