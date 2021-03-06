import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BallSelectionComponent } from './ball-selection/ball-selection.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameServiceService } from './services/game-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BallSelectionComponent,
    BetSlipComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
