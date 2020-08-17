import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../../service/home.service';
import { HindiService } from '../../../service/hindi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout:8000,
    dots: true,
    lazyLoad: true,
    nav:true,
    navSpeed: 700,
    navText: [''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1,
        autoplay: true
      },
      740: {
        items: 1,
        autoplay: true
      },
      940: {
        items: 1,
        dots: true,
        nav:true,
        autoplay: true
      }
    },
  }
  movies: any;
  loading = true;
  isTrue: boolean = true;
  hindiMovie: any;
  constructor(private service:HomeService, private hindi_service: HindiService, private router:ActivatedRoute) { }

  ngOnInit() {
    // this.getActionMovie();
    this.getHindi();
  }
  // getActionMovie(){
  //   this.service.getHomeBanner().subscribe(data=>{
  //     this.movies = data.data.movies
  //     this.loading = false;
  //   })
  // }
  getHindi(){
    this.hindi_service.getHindi().subscribe(data=>{
      this.hindiMovie = data.homeBanner
      // console.log(this.hindiMovie)
      this.loading = false;
    })
  }
}
