import { Component, OnInit } from '@angular/core';
import { HindiwebService } from '../../service/hindiweb.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hindiwebseriesdetail',
  templateUrl: './hindiwebseriesdetail.component.html',
  styleUrls: ['./hindiwebseriesdetail.component.scss']
})
export class HindiwebseriesdetailComponent implements OnInit {
  hindiWebDetail:any;
  loading = true;
  constructor(
    private service: HindiwebService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    let id = +this.route.snapshot.paramMap.get('id');
    this.hindiWebDetail = this.getHindiWebDetail(id)
    console.log(this.hindiWebDetail)
    this.loading=false
    
  }
  getHindiWebDetail(id : number){
    return this.service.getHindiWebDetail(id);
    this.loading = false
  }

}
