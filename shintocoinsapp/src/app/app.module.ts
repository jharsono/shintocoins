import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShintoService } from './shinto.service';
import { HttpClientModule } from '@angular/common/http';
import { LedgerComponent } from './ledger/ledger.component';
import { HomeComponent } from './home/home.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    LedgerComponent,
    HomeComponent,
    MineComponent,
    BuyComponent,
    SellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
