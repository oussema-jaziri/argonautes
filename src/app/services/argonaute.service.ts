import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArgonauteService {

  argonauteUrl='http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  addArgonaute(x:any){
    return this.httpClient.post(`${this.argonauteUrl}/addArgonaute`,x);
  }

  getAllArgonautes(){
    return this.httpClient.get<{message:String,argonautes:any}>(`${this.argonauteUrl}/getAllArgonautes`);
  }

}
