import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {HomeService} from './service/home.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeheroComponent } from './component/banner/homehero/homehero.component';
import { BestmovieComponent } from './component/bestmovie/bestmovie.component';
import { SearchmovieComponent } from './component/searchmovie/searchmovie.component';
import { HomeComponent } from './component/home/home/home.component';
import { TvshowsComponent } from './component/tvshows/tvshows.component';
import { MoviesComponent } from './component/movies/movies.component';
import { InnersearchComponent } from './component/innersearch/innersearch.component';
import { ContentslidComponent } from './component/contentslid/contentslid.component';
import { AddsectionComponent } from './component/addsection/addsection.component';
import { FooterComponent } from './footer/footer.component';
import { TrailersComponent } from './component/trailers/trailers.component';
import { DetailComponent } from './component/detail/detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ActionadventureComponent } from './component/actionadventure/actionadventure.component';
import { TopratedComponent } from './component/toprated/toprated.component';
import { MoviessuggesComponent } from './component/moviessugges/moviessugges.component';
import { SafePipe } from './service/safe.pipe';
import { EnglishComponent } from './component/english/english.component';
import { from } from 'rxjs';
import { DmoviesComponent } from './component/dmovies/dmovies.component';
import { HeroComponent } from './component/banner/hero/hero.component';
import { HomenavComponent } from './homenav/homenav.component';
import { HindiComponent } from './component/hindi/hindi.component';
import { HindidetailComponent } from './component/hindidetail/hindidetail.component';
import { HindiwebseriesComponent } from './component/hindiwebseries/hindiwebseries.component';
import { HindiwebseriesdetailComponent } from './component/hindiwebseriesdetail/hindiwebseriesdetail.component';
import { EnglishwebseriesComponent } from './component/englishwebseries/englishwebseries.component';
import { EnglishwebseriesdetailComponent } from './component/englishwebseriesdetail/englishwebseriesdetail.component';
import { BestmoviedetailComponent } from './component/bestmoviedetail/bestmoviedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeheroComponent,
    BestmovieComponent,
    SearchmovieComponent,
    HomeComponent,
    TvshowsComponent,
    MoviesComponent,
    InnersearchComponent,
    ContentslidComponent,
    AddsectionComponent,
    FooterComponent,
    TrailersComponent,
    DetailComponent,
    ActionadventureComponent,
    TopratedComponent,
    MoviessuggesComponent,
    SafePipe,
    EnglishComponent,
    DmoviesComponent,
    HeroComponent,
    HomenavComponent,
    HindiComponent,
    HindidetailComponent,
    HindiwebseriesComponent,
    HindiwebseriesdetailComponent,
    EnglishwebseriesComponent,
    EnglishwebseriesdetailComponent,
    BestmoviedetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
