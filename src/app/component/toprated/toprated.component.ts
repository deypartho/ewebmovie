import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss']
})
export class TopratedComponent implements OnInit {
  title = 'Ewebmovies: Download Top Rated Movies';
  movies: any;
  loading = true;
  p: number = 1;
  limit: number = 12;
  total: number;
  constructor(
    private service:HomeService, 
    private titleService: Title,
    private meta: Meta ,
    private router: Router) { }
    @ViewChild('searchMovie') searchMovie: ElementRef;  
  ngOnInit(): void {
    this.getTopratedMovie(this.p);
    this.titleService.setTitle(this.title);
      this.meta.addTag({name: 'keywords', content: 'ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
      this.meta.addTag({name: 'description', content: 'Amazing movies collection, English Movies collections. Download latest movies in india, Hollywood movies collections'});
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });  
  }
  getTopratedMovie(p:number){
    let offset = (p - 1) * this.limit;
    this.service.getRatedMovie(offset, this.limit, '').subscribe(data=>{
      this.movies = data.data.movies
      this.total = data.data.movie_count;
      this.loading = false;
    })
  }
  getPage(pageNo: number) {
    this.p = pageNo;
    this.getTopratedMovie(this.p);
  }
  getEmgData(p: number){
    let offset = (p - 1) * this.limit;
    let MovieName = this.searchMovie.nativeElement.value
    this.service.getRatedMovie(offset, this.limit, MovieName).subscribe(data=>{
      this.movies = data.data.movies
      this.total = data.data.movie_count;
      this.loading = false;
    })
  }
}
