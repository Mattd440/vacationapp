import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {UserModel} from './user.model'
import {Observable} from "rxjs";
@Injectable()
export class DataService {
  constructor(private _http: Http) {

  }

  getCruises() {
    return this._http.get('../../assets/data/cruises.json')
      .map((response:Response) => response.json());
  }

  getResorts(){
    return this._http.get('../../assets/data/resorts.json')
      .map((response:Response) => response.json());
  }

  searchWeather(cityName: string): Observable<any>{
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID=41b11b3c734e639212f3c55329f64ff3&units=imperial')
      .map((response:Response) => response.json());
  }


  getForeCast(cityName:string): Observable<any>{
    return this._http.get('http://api.openweathermap.org/data/2.5/forecast?q='+cityName +',us&APPID=41b11b3c734e639212f3c55329f64ff3&units=imperial')
      .map((response:Response) => response.json());
  }



}
