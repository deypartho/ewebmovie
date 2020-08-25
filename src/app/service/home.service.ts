import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  _URL = "https://yts.mx/api/v2/";
  _ytsUrl="https://yts.mx/api/v2/";
  movieList= "list_movies.json?";
  movieDetails = "movie_details.json?";
  suggess= "movie_suggestions.json?";
  like_count="like_count";
  year="year";
  rating="rating";
  
  constructor(private _http: HttpClient) { }

  getLikeCountMovie(offset: number, limit: number, search): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.like_count}&limit=${limit}&page=${offset}&query_term=${search}`)
  }
  getLikeCountHome(): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.like_count}&limit=20&page=1`)
  }
 
  getRatedMovie(offset: number, limit: number, search): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.rating}&limit=${limit}&page=${offset}&query_term=${search}`)
  }
  getRatedHome(): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.rating}&limit=20&page=1`)
  }
  getBestMovie(offset: number, limit: number, search): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.year}&limit=${limit}&page=${offset}&query_term=${search}`)
  }
  get3DMovie(limit: number, offset: number, search): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}quality=3D&limit=${limit}&page=${offset}&query_term=${search}`)
  }
  getBestHome(): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.year}&limit=6&page=1`)
  }
  getHomeBanner(): Observable<any>{
    return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.year}&limit=50&page=4`)
  }
  
  getEnglishtMovie(offset: number, limit: number): Observable<any>{
      return this._http.get<any>(`${this._ytsUrl}${this.movieList}&limit=${limit}&page=${offset}`)
  }
  getHomeLatestMovie(): Observable<any>{
      return this._http.get<any>(`${this._ytsUrl}${this.movieList}sort_by=${this.year}&limit=20&page=4`)
  }
  
  getCurrentData(id): Observable<any>{
    return this._http.get(`${this._ytsUrl}${this.movieDetails}movie_id=${id}&with_images=true&with_cast=true`)
  }
  getSuggesMovie(id): Observable<any>{
    return this._http.get(`${this._ytsUrl}${this.suggess}movie_id=${id}&with_images=true&with_cast=true`)
  }
  getMovieReview(id): Observable<any>{
    return this._http.get(`${this._ytsUrl}movie_comments.json?movie_id=${id}`)
  }
}
