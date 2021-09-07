import { UrlClass } from './../Models/url-class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) {}
  getAll(){
    return this.http.get<any>(SERVER_URL+'URL/GetList');
  }
  addNewUrl(url:UrlClass){
    return this.http.post<any>(SERVER_URL+'URL/addUrl',url); 
  }
}
