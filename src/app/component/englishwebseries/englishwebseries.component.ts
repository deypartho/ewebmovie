import { Component, OnInit } from '@angular/core';
import { EnglishwebService } from '../../service/englishweb.service';
import { response } from 'express';

@Component({
  selector: 'app-englishwebseries',
  templateUrl: './englishwebseries.component.html',
  styleUrls: ['./englishwebseries.component.scss']
})
export class EnglishwebseriesComponent implements OnInit {
  engWebSeason: any;
  loading = true;
  constructor(
    private service: EnglishwebService
  ) { }

  ngOnInit(): void {
    this.getEngWeb()
  }

  getEngWeb(){
    this.service.getEngWeb().subscribe(response=>{
      this.engWebSeason = response.englishSeason
      console.log(this.engWebSeason)
      this.loading = false
    })
  }

}
