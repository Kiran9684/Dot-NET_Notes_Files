import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ICustomer } from '../Models/ICustomer';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  customerUrl :string = 'https://localhost:44351/api/Customer';
  constructor(private http:HttpClient) { }

  getCustomers() : Observable<ICustomer[]>
  {
    return this.http.get<ICustomer[]>(this.customerUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );;
  }

  addCustomer(data:ICustomer) :Observable<ICustomer>
  {
    return this.http.post<ICustomer>(this.customerUrl,data ).pipe(
      
      catchError(this.handleError)
    );
  }

  
  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    window.alert(err.error);
    return throwError(errorMessage);
  }
}
