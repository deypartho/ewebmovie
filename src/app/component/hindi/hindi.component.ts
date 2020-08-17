import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationEnd} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HindiService } from '../../service/hindi.service';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.scss']
})
export class HindiComponent implements OnInit {
  title = 'Ewebmovies: Download Hindi movies';
  hindiList : any;
  loading = true;
  name : string;

  constructor(
    private service: HindiService, 
    private route: ActivatedRoute,
    public router:Router,    
    private titleService: Title,
    private meta: Meta 
  ) { }
  ngOnInit(){
    this.titleService.setTitle(this.title);
    this.meta.addTag({name: 'author', content: 'Enetwebsolution'});
    this.meta.addTag({name: 'keywords', content: 'ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
    this.meta.addTag({name: 'description', content: 'Amazing movies collection, English Movies collections. Download latest movies in india, Hollywood movies collections'});
    this.getHindiMovie();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });  
  }
  getHindiMovie(){
    this.service.getHindi().subscribe(data=>{
      this.hindiList = data.hindiYts
      // console.log(this.hindiList)
      this.loading = false;
    })
  }

  

  
}
