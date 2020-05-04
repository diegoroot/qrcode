import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  api: string = 'http://192.168.0.13:9000/ingresar_sala';

  constructor(private http: Http) { }

  consulta(data){
    let type = 'application/json; charset=utf-8';
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.api, data, options);
  }

}
