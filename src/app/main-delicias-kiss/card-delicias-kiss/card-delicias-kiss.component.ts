import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-delicias-kiss',
  templateUrl: './card-delicias-kiss.component.html',
  styleUrls: ['./card-delicias-kiss.component.css'],
})

export class CardDeliciasKissComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  bannerCard() {
    let styles = {
      'background-image': 'url(assets/imagens/main/cardConfeiteira/bannerCard.jpg)',
      'height': '720px',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover',
      'margin-top' : '150px',
    }
    return styles;
  }


  urlBannerSvg: String = 'assets/imagens/main/cardConfeiteira/cardBannerSvg.svg'
  headerOndas:String = 'assets/imagens/Header/headerOndas.svg'
  photosCard: any[] = [
    {
      url: 'assets/imagens/main/cardConfeiteira/festaInfantil.png',
      textCard: 'Festas Infantis'
    },

    {
      url: 'assets/imagens/main/cardConfeiteira/boloPersonalizado.png',
      textCard: 'Bolos Personalizados'
    },

    {
      url: 'assets/imagens/main/cardConfeiteira/docesPersonalizados.png',
      textCard: 'Doces Personalizados'
    },

    {
      url: 'assets/imagens/main/cardConfeiteira/ovosPascoa.png',
      textCard: 'Ovos de Pascoa'
    },

  ]

  photosCardTwo: any[] = [
    {
      url: 'assets/imagens/main/cardConfeiteira/caixaExplosao.png',
      textCard: 'Caixa Explosão'
    },

    {
      url: 'assets/imagens/main/cardConfeiteira/smashCake.png',
      textCard: 'Smash the cake'
    },

    {
      url: 'assets/imagens/main/cardConfeiteira/docesGourmet.png',
      textCard: 'Doces Gourmet'
    },

    {
      url: 'assets/imagens/main/cardConfeiteira/bemCasado.png',
      textCard: 'Bem casado'
    },
  ]
}