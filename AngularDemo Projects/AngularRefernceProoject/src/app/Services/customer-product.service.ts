import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ICustomerProduct } from '../Models/ICustomerProduct';

@Injectable({
  providedIn: 'root'
})
export class CustomerProductService {
  url :string ="https://localhost:44351/api/CustomerProduct";
  constructor(private http:HttpClient) { }

  addData(data:any):Observable<ICustomerProduct>
  {
    console.log("inside Add Data Method");
    return this.http.post<ICustomerProduct>(this.url,data).pipe(
      catchError(this.handleError)
    )
  }

  getdataList():Observable<ICustomerProduct[]>
  {
    return this.http.get<ICustomerProduct[]>(this.url).pipe(
      tap(data => console.log('All',JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  delete(custId : string) :Observable<ICustomerProduct>
  {
    return this.http.delete<ICustomerProduct>(`${this.url}/${custId}`).pipe(
      tap(data => console.log('All',JSON.stringify(data))),
      catchError(this.handleError)
    )
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
    return throwError(errorMessage);
  }
}
