import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-delicias-kiss',
  templateUrl: './nav-delicias-kiss.component.html',
  styleUrls: ['./nav-delicias-kiss.component.css']
})
export class NavDeliciasKissComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  primeiraLista: String[] = ['Home', 'Sobre a confeiteira', 'Portifolio']
  urlLogo: String = 'assets/imagens/Header/logo.png';
  segundaLista: String[] = ['Cardapio', 'Faça o seu pedido']
  
}
