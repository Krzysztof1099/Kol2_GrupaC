import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopKpComponent } from './components/shop-kp/shop-kp.component';
import { ShopItemKpComponent } from './components/shop-item-kp/shop-item-kp.component';
import { ShopDetailsKpComponent } from './components/shop-details-kp/shop-details-kp.component';
import {HttpClientModule} from '@angular/common/http';
import { KPDataService } from './services/kp-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopKpComponent,
    ShopItemKpComponent,
    ShopDetailsKpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KPDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
