
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, provideHttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailBackendService {
  private baseUrl = "http://localhost:8080";
  constructor(private httpClient : HttpClient) { }

sendEmail(data:any): Observable<any>{
  return this.httpClient.post(`http://localhost:8080/sendEmail`,data)
}

}
