import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ewebmovies';
  constructor(
    public router:Router,
    private titleService: Title,
    private meta: Meta  
    ){}

    ngOnInit(){
      this.titleService.setTitle(this.title);
      this.meta.addTag({name: 'author', content: 'Enetwebsolution'});
      this.meta.addTag({name: 'robots', content: 'index, follow'});
      this.meta.addTag({name: 'keywords', content: 'ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
      this.meta.addTag({name: 'description', content: 'Amazing movies collection, English Movies collections. Download latest movies in india, Hollywood movies collections'});
    }
}
