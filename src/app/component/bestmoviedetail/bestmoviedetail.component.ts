import { Component, OnInit } from '@angular/core';
import { HindiwebService } from '../../service/hindiweb.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bestmoviedetail',
  templateUrl: './bestmoviedetail.component.html',
  styleUrls: ['./bestmoviedetail.component.scss']
})
export class BestmoviedetailComponent implements OnInit {
  bestmoviedetail:any;
  loading = true;
  constructor(
    private service: HindiwebService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.bestmoviedetail = this.getBestDetail(id)
    console.log(this.bestmoviedetail)
    this.loading=false
  }

  getBestDetail(id : number){
    return this.service.getBestHindiDetail(id);
    this.loading = false
  }
}
