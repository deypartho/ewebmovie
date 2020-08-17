import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Ewebmovies'; 
  constructor(
    public router:Router,
    private titleService: Title,
    private meta: Meta  
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.addTag({name: 'keywords', content: 'ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
      this.meta.addTag({name: 'description', content: 'The amazing movie collection, English Movie collections. Download latest movies in India, Hollywood movies collectionsn'});
  }
 
}
