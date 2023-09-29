import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promt } from '../models/promt';

@Injectable({
  providedIn: 'root'
})
export class GenerateserviceService {

  private baseUrl =' https://dark-jade-kitten-wear.cyclic.cloud';
  prompt:any;
  constructor(private http:HttpClient) {}

  postImage(prompt:Promt): Observable<string> {
    const url = `${this.baseUrl}/image`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // const requestBody = {
    //   prompt: 'indosenia batik stroke pattern with B&W color'
    // };

    return this.http.post(url, prompt, { headers, responseType: 'text' });
  }


}
