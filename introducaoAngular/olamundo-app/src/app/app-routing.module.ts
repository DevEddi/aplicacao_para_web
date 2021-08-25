import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {ContatosComponent} from "./contatos/contatos.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'contatos', component: ContatosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
