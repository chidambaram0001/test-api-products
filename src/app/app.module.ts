import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductList } from './productlist/product.list.component';
import { ProductService } from './productlist/product.service';
import {HttpClientModule} from '@angular/common/http'
import { Popup } from './popup/popup.component';
import { CarouselComponent, CarouselItemElement } from './popup/carousel.component';
import { CarouselItemDirective } from './popup/carousel-item.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, ProductList,Popup, CarouselComponent, 
    CarouselItemDirective, CarouselItemElement 
  ],
  imports: [
    BrowserModule,
    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
