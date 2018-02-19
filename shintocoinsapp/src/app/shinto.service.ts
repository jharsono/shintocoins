import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShintoService {

  constructor(private _http: HttpClient){
  }

    getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/ROUTE_WHERE_YOU_GET_DATA');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our DATA!", data));
    }
  }
