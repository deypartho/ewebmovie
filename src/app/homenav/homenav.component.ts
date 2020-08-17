import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homenav',
  templateUrl: './homenav.component.html',
  styleUrls: ['./homenav.component.scss']
})
export class HomenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
