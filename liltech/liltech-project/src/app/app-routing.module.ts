import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { TemplatesComponent } from './templates/templates.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'game', component: GameComponent},
    {path: 'index', component: TemplatesComponent},
    {path: 'about', component: TemplatesComponent}
  ]),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
