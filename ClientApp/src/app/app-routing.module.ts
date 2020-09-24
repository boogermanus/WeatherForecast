import { NgModule } from '@angular/core';
import { Route, RouterModule, UrlMatchResult, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'locationsearch', component: LocationSearchComponent},
  { path: 'forecast/:office/:station/:grid', component: ForecastComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
