import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { TaxPipe } from './pipes/tax.pipe';
import { HomePage } from "./home/home.page";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './component/user/user.component'
import { CalcComponent } from './components/calc/calc.component';

@NgModule({
  declarations: [AppComponent, HomePage, UserComponent, CalcComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, TaxPipe],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
