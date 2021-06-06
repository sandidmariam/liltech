import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { TemplatesComponent } from './templates/templates.component';
import {AutismeComponent} from "./autisme/autisme.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'game', component: GameComponent},
    {path: 'index', component: TemplatesComponent},
    {path: 'autisme/definition', component: AutismeComponent}
  ]),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
