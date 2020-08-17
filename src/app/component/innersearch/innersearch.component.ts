import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DmovieService } from '../../service/dmovie.service';

@Component({
  selector: 'app-innersearch',
  templateUrl: './innersearch.component.html',
  styleUrls: ['./innersearch.component.scss']
})
export class InnersearchComponent implements OnInit {
  // searchResult
  searchMovie: string;
  constructor(
    private service: DmovieService,
    private _http: HttpClient
  ) { }

  @Output() outputParent = new EventEmitter<string>();

  ngOnInit(): void {
  }
  getData(){
    this.outputParent.emit(this.searchMovie);
  }
}
