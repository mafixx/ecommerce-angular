import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './navegacao/contato/contato.component';
import {HomeComponent} from './navegacao/home/home.component';
import {ProdutoComponent} from './navegacao/produto/lista-produto/produto.component';
import { SobreComponent } from './navegacao/sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path: 'produto', component:ProdutoComponent},
  {path:'sobre' ,component:SobreComponent},
  {path:'contato', component:ContatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
