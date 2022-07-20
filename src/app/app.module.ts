import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './navegacao/sobre/sobre.component';
import { MenusComponent } from './navegacao/menus/menus.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ContatoComponent } from './navegacao/contato/contato.component';
import { ProdutoComponent } from './navegacao/produto/lista-produto/produto.component';
import { HomeComponent } from './navegacao/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './navegacao/produto/service/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    MenusComponent,
    FooterComponent,
    ContatoComponent,
    ProdutoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
