import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ImageDataService } from './image-data.service';

import { AppComponent } from './app.component';
import { WorkPlaceComponent } from './game-window/work-place/work-place.component';
import { PicSelectorComponent } from './game-window/pic-selector/pic-selector.component';
import { GameWindowComponent } from './game-window/game-window.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkPlaceComponent,
    PicSelectorComponent,
    GameWindowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ImageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
