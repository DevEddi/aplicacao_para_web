import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {ContatosComponent} from "./contatos/contatos.component";
import {InterpolacaoComponent} from "./interpolacao/interpolacao.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'interpolacao', component: InterpolacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
