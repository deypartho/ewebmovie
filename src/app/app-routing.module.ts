import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { TvshowsComponent } from './component/tvshows/tvshows.component';
import { MoviesComponent } from './component/movies/movies.component';
import { TrailersComponent } from './component/trailers/trailers.component';
import { DetailComponent } from './component/detail/detail.component';
import { ActionadventureComponent } from './component/actionadventure/actionadventure.component';
import { TopratedComponent } from './component/toprated/toprated.component';
import { MoviessuggesComponent } from './component/moviessugges/moviessugges.component';
import { EnglishComponent } from './component/english/english.component';
import { DmoviesComponent } from './component/dmovies/dmovies.component';
import { HindiComponent } from './component/hindi/hindi.component';
import { HindidetailComponent } from './component/hindidetail/hindidetail.component';
import { HindiwebseriesComponent } from './component/hindiwebseries/hindiwebseries.component';
import { HindiwebseriesdetailComponent } from './component/hindiwebseriesdetail/hindiwebseriesdetail.component';
import { EnglishwebseriesComponent } from './component/englishwebseries/englishwebseries.component';
import { EnglishwebseriesdetailComponent } from './component/englishwebseriesdetail/englishwebseriesdetail.component';
import { BestmoviedetailComponent } from './component/bestmoviedetail/bestmoviedetail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'home', component: HomeComponent },
  {path: 'tvshows', component: TvshowsComponent },
  {path: 'movies/:id', component: DetailComponent },
  {path: 'moviessugges/:id', component: MoviessuggesComponent },
  {path: 'trailers', component: TrailersComponent },
  {path: 'action_adventure', component: ActionadventureComponent },
  {path: 'top_rated', component: TopratedComponent },
  {path: 'english', component: EnglishComponent },
  {path: '3d', component: DmoviesComponent },
  {path: 'hindi', component: HindiComponent},
  {path: 'hindidetail/:id', component: HindidetailComponent},
  {path: 'hindiwebseries', component: HindiwebseriesComponent},
  {path: 'hindiwebseriesdetail/:id', component: HindiwebseriesdetailComponent},
  {path: 'englishwebseries', component: EnglishwebseriesComponent},
  {path: 'englishwebseriesdetail/:id', component: EnglishwebseriesdetailComponent},
  {path: 'bestmoviedetail/:id', component: BestmoviedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
