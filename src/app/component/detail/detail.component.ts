import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../service/home.service";
import { ActivatedRoute } from "@angular/router";
import { Router, NavigationEnd } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
import { response } from "express";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  title = "Ewebmovies";
  loading = true;
  player;

  movieList: any;
  movieSuggesList: any;
  movieReview: any;

  constructor(
    private service: HomeService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: "description",
      content:
        "Amazing movies collection, English Movies collections. Download latest movies in india, Hollywood movies collections",
    });

    this.service
      .getCurrentData(this.route.snapshot.params.id)
      .subscribe((response) => {
        this.movieList = response.data.movie;
        this.loading = false;
        // console.log(this.movieList)
        this.titleService.setTitle(
          (this.title = "Title: " + this.movieList.title)
        );
        this.meta.addTag({
          name: "keywords",
          content: `${this.movieList.title}, ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online`,
        });
      });
    this.service
      .getSuggesMovie(this.route.snapshot.params.id)
      .subscribe((response) => {
        this.movieSuggesList = response.data.movies;
        this.loading = false;
      });
    this.service
      .getMovieReview(this.route.snapshot.params.id)
      .subscribe((response) => {
        this.movieReview = response;
        // console.log(this.movieReview)
      });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  stopTrailer() {}
}
