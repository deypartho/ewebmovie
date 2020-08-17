import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    lazyLoad: true,
    navSpeed: 700,
    nav:true,
    navText: [''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    }
  }

  movies : any;
  ratedMovie: any;
  HomeLatestMovie: any;
  discriptions: any;
  discriptions2: any;
  discriptions3: any;
  discriptions4: any;
  constructor(private service: HomeService) {
    
   }

  ngOnInit(): void {
    this.gegAllMovie();
    this.getRatedMovie();
    this.getHomeLatestMovie();
    this.gegAllDiscriptions();
    this.gegAllDiscriptions2();
    this.gegAllDiscriptions3();
    this.gegAllDiscriptions4();
  }

  gegAllMovie(){
    this.service.getLikeCountHome().subscribe(data =>{
      this.movies = data.data.movies
      // console.log(this.movies)
    })
  }

  // for consol only
  gegAllDiscriptions(){
    this.service.getHomeBanner().subscribe(data =>{
      this.discriptions = data.data.movies
    })
  }
  gegAllDiscriptions2(){
    this.service.getRatedHome().subscribe(data =>{
      this.discriptions2 = data.data.movies
      // console.log(this.movies)
    })
  }
  gegAllDiscriptions3(){
    this.service.getLikeCountHome().subscribe(data =>{
      this.discriptions3 = data.data.movies
      // console.log(this.movies)
    })
  }
  gegAllDiscriptions4(){
    this.service.getHomeLatestMovie().subscribe(data =>{
      this.discriptions4 = data.data.movies
      // console.log(this.movies)
    })
  }

  // end console

 
  getRatedMovie(){
    this.service.getRatedHome().subscribe(data =>{
      this.ratedMovie = data.data.movies
    })
  }
  getHomeLatestMovie(){
    this.service.getHomeLatestMovie().subscribe(data =>{
      this.HomeLatestMovie = data.data.movies
    })
  }
}
