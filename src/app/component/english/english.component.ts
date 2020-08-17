import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {
    title = 'Ewebmovies: Download English latest movies';
    p: number = 1;
    limit: number = 20;
    total: number;


    engBestMovie: any;
    loading = true;

    constructor(
      private service: HomeService, 
      private route: ActivatedRoute,
      public router:Router,    
      private titleService: Title,
      private meta: Meta 
      ) {}

  @ViewChild('searchEngMovie') searchEngMovie: ElementRef;  

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.addTag({name: 'author', content: 'Enetwebsolution'});
    this.meta.addTag({name: 'keywords', content: 'ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
    this.meta.addTag({name: 'description', content: 'Amazing movies collection, English Movies collections. Download latest movies in india, Hollywood movies collections'});

    this.getBestMovie(this.p)
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });  
      
  }
  getBestMovie(p: number){
    let offset = (p - 1) * this.limit;
    this.service.getBestMovie(offset, this.limit, '').subscribe((response)=>{
      this.engBestMovie = response.data.movies
      this.total = response.data.movie_count;
      this.loading = false;
    })
  }
  getPage(pageNo: number) {
    this.p = pageNo;
    this.getBestMovie(this.p);
  }
  getEmgData(p: number){
    let offset = (p - 1) * this.limit;
    let MovieName = this.searchEngMovie.nativeElement.value
    this.service.getBestMovie(offset, this.limit, MovieName).subscribe((response)=>{
      this.engBestMovie = response.data.movies
      this.total = response.data.movie_count;
      this.loading = false;
    })
  }
}
