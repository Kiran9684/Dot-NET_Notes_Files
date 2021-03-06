import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebapiserviceService {

  constructor(private httpClient : HttpClient) { }
  get(path): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/${path}`);
  }
  post(path, data): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/${path}`, data);
  }
  
  

  delete(path,id): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/${path}/${id}`);
  }
  update(path, data): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}/${path}`, data);
  }

  getById(path,id): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/${path}/${id}`);
  }
  
}
