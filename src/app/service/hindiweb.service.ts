import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { configration } from "./config";

@Injectable({
  providedIn: 'root'
})
export class HindiwebService {
  config = configration;
  constructor(private _http: HttpClient) { }

  getHindiWeb(){
    return this.config;
  }
  getHindiWebDetail(id:number){
    return this.config.hindiSeasonDetail[id - 1];
  }
  getBestHindiDetail(id:number){
    return this.config.todaybestdetail[id - 1];
  }
}
