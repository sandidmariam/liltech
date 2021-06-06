import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesComponent } from './templates/templates.component';
import { GameCardComponent } from './game-card/game-card.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';
import { GameComponent } from './game/game.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AutismeComponent } from './autisme/autisme.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    GameCardComponent,
    RestartDialogComponent,
    GameComponent,
    AutismeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
