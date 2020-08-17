import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  movieList:any=[]
  movieSuggesList:any=[]
  constructor(private service: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }


}
