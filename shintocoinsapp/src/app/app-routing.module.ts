import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedgerComponent } from './ledger/ledger.component';
import { MineComponent } from './mine/mine.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
  { path: 'ledger',component: LedgerComponent },
  { path: 'mine',component: MineComponent },
  { path: 'home',component: HomeComponent },
  { path: 'buy',component: BuyComponent },
  { path: 'sell',component: SellComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
