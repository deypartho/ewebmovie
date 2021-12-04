import { Component, OnInit } from "@angular/core";
import { HindiwebService } from "../../service/hindiweb.service";
import { ActivatedRoute } from "@angular/router";
import { Router, NavigationEnd } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-hindiwebseries",
  templateUrl: "./hindiwebseries.component.html",
  styleUrls: ["./hindiwebseries.component.scss"],
})
export class HindiwebseriesComponent implements OnInit {
  title = "Ewebmovies: Hindi Web Season";
  hindiWebSeason: {};
  loading = true;
  constructor(
    private service: HindiwebService,
    private route: ActivatedRoute,
    public router: Router,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.addTag({ name: "author", content: "Enetwebsolution" });
    this.meta.addTag({
      name: "keywords",
      content:
        "ewebmovies, webmovies, emovies, online movies, online torrent download, magnet download, magnet download sites, Hollywood movies download latest movies, download latest movies torrents, download latest english movies, download latest english movies torrents, english movie, watch movies, watch movies online",
    });
    this.meta.addTag({
      name: "description",
      content:
        "Amazing movies collection, English Movies collections. Download latest movies in india, Hollywood movies collections",
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.hindiWebSeason = this.gitHindiWeb();
    // console.log(this.hindiWebSeason)
    this.loading = false;
  }
  gitHindiWeb() {
    return this.service.getHindiWeb().hindiSeason;
  }
}
