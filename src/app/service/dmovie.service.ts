import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmovieService {

  _URL = "https://yts.mx/api/v2/";
  _ytsUrl="https://yts.mx/api/v2/";
  movieList= "list_movies.json?";
  quality = "3D";
  year= "year";

 
  constructor(private _http: HttpClient) { }

  get3DMovie(offset: number, limit: number, search): Observable<any>{
    return this._http.get<any>(`https://yts.mx/api/v2/list_movies.json?quality=3D&limit=${limit}&page=${offset}`)
  }
  getSearch(search): Observable<any>{
    return this._http.get<any>(`${this._URL}${this.movieList}query_term=${search}`)
  }
}
