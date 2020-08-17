import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Observable, from } from 'rxjs';
import { DetailMovie } from '../../class/detailMovie';
import { Movie } from '../../class/movie';
@Component({
  selector: 'app-moviessugges',
  templateUrl: './moviessugges.component.html',
  styleUrls: ['./moviessugges.component.scss']
})
export class MoviessuggesComponent implements OnInit {
  title = 'Ewebmovies';
  loading = true;
  movieList:any
  movieSuggesList:any
  constructor(
    private service: HomeService, 
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta 
    ) {
      
     }

  ngOnInit(): void {        
    this.meta.addTag({name: 'author', content: 'Enetwebsolution'});
    this.meta.addTag({name: 'description', content: 'How to Download latest movies, How to Download latest movies in india, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online'});
    this.service.getCurrentData(this.route.snapshot.params.id).subscribe((response)=>{
      this.movieList = response.data.movie
      this.titleService.setTitle(this.title = 'Title: ' +this.movieList.title);
      this.meta.addTag({name: 'keywords', content: `${this.movieList.title}, download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online`});
      this.loading = false;
  })
  this.service.getSuggesMovie(this.route.snapshot.params.id).subscribe((response)=>{
    this.movieSuggesList = response.data.movies
    this.loading = false;
  })
  }
}
