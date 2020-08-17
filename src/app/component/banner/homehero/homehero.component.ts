import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../../../service/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homehero',
  templateUrl: './homehero.component.html',
  styleUrls: ['./homehero.component.scss']
})
export class HomeheroComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    lazyLoad: true,
    navSpeed: 700,
    navText: [''],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  movies: any;
  loading = true;
    constructor(private service:HomeService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.getActionMovie();
  }
  getActionMovie(){
    this.service.getHomeBanner().subscribe(data=>{
      this.movies = data.data.movies
      this.loading = false;
    })
  }
}
