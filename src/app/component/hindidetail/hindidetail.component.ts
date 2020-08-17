import { Component, OnInit } from '@angular/core';
import { HindiService } from '../../service/hindi.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hindidetail',
  templateUrl: './hindidetail.component.html',
  styleUrls: ['./hindidetail.component.scss']
})
export class HindidetailComponent implements OnInit {
  title = 'Ewebmovies';
  loading = true;
  movieList: any;
  movieSuggesList: any;

  constructor(
    private service: HindiService, 
    private route: ActivatedRoute, 
    private router: Router,
    private titleService: Title,
    private meta: Meta 
  ) { }

  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    this.meta.addTag({name: 'description', content: 'Amazing movies collection, English Movies collections. Download latest movies in india, Hollywood movies collections'});
   //Hindi movie detail 
   this.service.getHindiDetail(this.route.snapshot.params.id).subscribe(response=>{
     this.movieList = response.data.movie
    //  console.log(this.movieList)
     this.loading = false;
     this.titleService.setTitle(this.title = 'Title: ' +this.movieList.title);
      this.meta.addTag({name: 'keywords', content: `${this.movieList.title}, ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online`});
   })

   // Sugges

   this.service.getSugges(this.route.snapshot.params.id).subscribe(response=>{
     this.movieSuggesList = response.data.movies;
     this.loading = false
    //  console.log(this.movieSuggesList)
   })

  }

}
