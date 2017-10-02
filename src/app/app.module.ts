import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './component/hero/hero-detail.component';
import { HeroesComponent } from './component/hero/heroes.component';
import { DashboardComponent } from './component/hero/dashboard.component';

//Service
import { HeroService } from './service/hero.service';

//Routing
import { AppRoutingModule } from './app-routing.module';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }