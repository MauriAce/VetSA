import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(public _http: HttpClient) {


  }
  getdata<T>(url: string) {
    
    url = ' https://rickandmortyapi.com/api/character '
    return this._http.get<any>(url);
  }
  obtenerdatos<T>() {

    return this._http.get<T[]>(' https://dog.ceo/api/breeds/list/all  ');

  }
 // getdata<T>(url: string) {
  //  url = ' https://dog.ceo/api/breeds/list/all  '
  //  return this._http.get<T[]>(url);
 // }
}
