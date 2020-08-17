import { Component, OnInit } from '@angular/core';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navClose = false
  constructor() {
   }

  ngOnInit() {
    if(window.innerWidth > 767){

    
    let header = document.querySelector('.navbar');
    window.onscroll = function(){
      let top = window.scrollY;
      if(top > 75){
        header.classList.add('header-light')
      }else{
        header.classList.remove('header-light')
      }
    }
  }
}
  navClick(){
    this.navClose = true
  }
}
