import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-dmovies',
  templateUrl: './dmovies.component.html',
  styleUrls: ['./dmovies.component.scss']
})
export class DmoviesComponent implements OnInit {
  title = 'Ewebmovies: Download 3D Movies';
  p: number = 1;
  limit: number = 50;
  total: number;

  DMovies: any;
  loading = true;

  constructor(
    private service:HomeService,
    private titleService: Title,
    private meta: Meta ,
    public router: Router
    ) { }

    @ViewChild('searchMovie') searchMovie: ElementRef;   

  ngOnInit(): void {
    this.get3DMovies(this.p);
    this.titleService.setTitle(this.title);
      this.meta.addTag({name: 'keywords', content: 'download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
      this.meta.addTag({name: 'description', content: 'How to Download latest movies, How to Download latest movies in india, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  get3DMovies(p: number){
    let offset = (p - 1) * this.limit;
    this.service.get3DMovie(this.limit, offset, '').subscribe((response)=>{
      this.DMovies = response.data.movies
      this.total = response.data.movie_count;
      this.loading = false;
    })
  }
  getPage(pageNo: number) {
    this.p = pageNo;
    this.get3DMovies(this.p);
  }
  getData(p: number){
    let offset = (p - 1) * this.limit;
    let MovieName = this.searchMovie.nativeElement.value
    this.service.getBestMovie(offset, this.limit, MovieName).subscribe((response)=>{
      this.DMovies = response.data.movies
      this.total = response.data.movie_count;
      this.loading = false;
    })
  }

}
