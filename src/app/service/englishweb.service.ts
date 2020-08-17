import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnglishwebService {

  _URL = "http://localhost:3000/";
  englishweb = "englishSeason";
  englishwebdetail = "englishSeasonDetail/";

  constructor(private _http: HttpClient) { }

  getEngWeb(): Observable<any>{
    return this._http.get<any>(`${this._URL}${this.englishweb}`);
  }

  getEngWebDetail(id){
    return this._http.get(`${this._URL}${this.englishwebdetail}${id}`)
  }
}
