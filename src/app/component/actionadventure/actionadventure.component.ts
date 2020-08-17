import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-actionadventure',
  templateUrl: './actionadventure.component.html',
  styleUrls: ['./actionadventure.component.scss']
})
export class ActionadventureComponent implements OnInit {
  title = 'Ewebmovies: Download Action Movies';
  movies: any;
  loading = true;
  p: number = 1;
  limit: number = 12;
  total: number;

  constructor(
    private service:HomeService, 
    private route:ActivatedRoute,
    private titleService: Title,
    private meta: Meta ,
    private router: Router) {
    
  }
  @ViewChild('searchMovie') searchMovie: ElementRef;  
  ngOnInit(): void {
    this.getActionMovie(this.p);
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
  getActionMovie(p : number){
    let offset = (p - 1) * this.limit;
    this.service.getLikeCountMovie(offset, this.limit, '').subscribe(data=>{
      this.movies = data.data.movies;
      this.total = data.data.movie_count;
      this.loading = false;
    })
  }
  getPage(pageNo: number) {
    this.p = pageNo;
    this.getActionMovie(this.p);
  }
  getEmgData(p: number){
    let offset = (p - 1) * this.limit;
    let MovieName = this.searchMovie.nativeElement.value
    this.service.getLikeCountMovie(offset, this.limit, MovieName).subscribe(data=>{
    this.movies = data.data.movies;
    this.total = data.data.movie_count;
    this.loading = false;
    })
  }
}
