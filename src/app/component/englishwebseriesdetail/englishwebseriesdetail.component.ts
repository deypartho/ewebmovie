import { Component, OnInit } from "@angular/core";
import { EnglishwebService } from "../../service/englishweb.service";
import { Router, ActivatedRoute } from "@angular/router";
import { response } from "express";

@Component({
  selector: "app-englishwebseriesdetail",
  templateUrl: "./englishwebseriesdetail.component.html",
  styleUrls: ["./englishwebseriesdetail.component.scss"],
})
export class EnglishwebseriesdetailComponent implements OnInit {
  englishWebDetail: any;
  loading = true;
  constructor(
    private service: EnglishwebService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service
      .getEngWebDetail(this.route.snapshot.params.id)
      .subscribe((response) => {
        this.englishWebDetail = response;
        // console.log(this.englishWebDetail)
        this.loading = false;
      });
  }
}
