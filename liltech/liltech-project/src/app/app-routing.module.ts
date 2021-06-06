import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { TemplatesComponent } from './templates/templates.component';
import {AutismeComponent} from "./autisme/autisme.component";
import {DepistageComponent} from "./depistage/depistage.component";
import {InformationsanteComponent} from "./informationsante/informationsante.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'game', component: GameComponent},
    {path: '', component: TemplatesComponent},
    {path: 'autisme/definition', component: AutismeComponent},
    {path: 'autisme/depistage', component: DepistageComponent},
    {path: 'autisme/informationSante', component: InformationsanteComponent}

  ]),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
