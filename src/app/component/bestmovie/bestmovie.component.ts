import { Component, OnInit } from '@angular/core';
import { HindiwebService } from '../../service/hindiweb.service';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bestmovie',
  templateUrl: './bestmovie.component.html',
  styleUrls: ['./bestmovie.component.scss']
})
export class BestmovieComponent implements OnInit {
  movies={};
  loading = true;
  constructor(
    private service:HindiwebService,
    private route: ActivatedRoute,
    public router:Router,    
    private titleService: Title,
    private meta: Meta 
  ) { }

  ngOnInit() {
    this.movies = this.gitHindiWeb()
    // console.log(this.movies)
    this.loading = false
  }
  gitHindiWeb(){
    return this.service.getHindiWeb().todaybest;
  }
}
