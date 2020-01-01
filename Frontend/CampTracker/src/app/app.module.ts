import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CampListComponent } from './camp-list/camp-list.component';
import { AddUpdateCampComponent } from './add-update-camp/add-update-camp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CampListComponent,
    AddUpdateCampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
