import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HindiService {

  _URL = "https://raw.githubusercontent.com/deypartho/ewebmovies/master/db.json";
  _ytsUrl="https://yts.mx/api/v2/";
  movieDetails = "movie_details.json?";
  suggess= "movie_suggestions.json?";

  constructor(private _http:HttpClient) { }

  getHindi(): Observable<any>{
    return this._http.get<any>(this._URL);  
  }
  getHindiDetail(id):Observable<any>{
    return this._http.get(`${this._ytsUrl}${this.movieDetails}movie_id=${id}&with_images=true&with_cast=true`)
  }
  getSugges(id):Observable<any>{
    return this._http.get(`${this._ytsUrl}${this.suggess}movie_id=${id}&with_images=true&with_cast=true`)
  }
}
