import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, UrlMatchResult, UrlSegment } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { LocationSearchComponent } from './location-search/location-search.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'locationsearch', component: LocationSearchComponent},
  { path: 'forecast/:office/:station/:grid', component: ForecastComponent},
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
