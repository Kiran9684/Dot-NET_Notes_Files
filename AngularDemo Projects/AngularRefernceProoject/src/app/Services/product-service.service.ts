import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from '../Models/IProduct';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productUrl : string = "https://localhost:44351/api/Product";
  constructor(private http:HttpClient) { }

  getProducts() : Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductByTitle(title:string) : Observable<IProduct>
  {
    return this.http.get<IProduct>(`${this.productUrl}/${title}`).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateProductPrice(product :IProduct):Observable<IProduct>
  {
    return this.http.put<IProduct>(this.productUrl,product).pipe(
      
      catchError(this.handleError)
    );
  }
  
  addProduct(data:IProduct) :Observable<IProduct>
  {
    return this.http.post<IProduct>(this.productUrl,data).pipe(
      
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
    return throwError(errorMessage);
  }
}
