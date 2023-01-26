import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
