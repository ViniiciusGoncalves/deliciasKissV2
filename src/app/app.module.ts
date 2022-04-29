import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderDeliciasKissComponent } from './header-delicias-kiss/header-delicias-kiss.component';
import { NavDeliciasKissComponent } from './header-delicias-kiss/nav-delicias-kiss/nav-delicias-kiss.component';
import { TextoHeaderComponent } from './header-delicias-kiss/texto-header/texto-header.component';
import { MainDeliciasKissComponent } from './main-delicias-kiss/main-delicias-kiss.component';
import { SobreConfeiteiraComponent } from './main-delicias-kiss/sobre-confeiteira/sobre-confeiteira.component';
import { CardDeliciasKissComponent } from './main-delicias-kiss/card-delicias-kiss/card-delicias-kiss.component';
import { NossosClientesComponent } from './main-delicias-kiss/nossos-clientes/nossos-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderDeliciasKissComponent,
    NavDeliciasKissComponent,
    TextoHeaderComponent,
    MainDeliciasKissComponent,
    SobreConfeiteiraComponent,
    CardDeliciasKissComponent,
    NossosClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
