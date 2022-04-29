import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-confeiteira',
  templateUrl: './sobre-confeiteira.component.html',
  styleUrls: ['./sobre-confeiteira.component.css']
})
export class SobreConfeiteiraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgSobreConfeiteira:String = 'assets/imagens/main/sobreConfeiteira/divider.png';
  imgConfeiteira:String = 'assets/imagens/main/sobreConfeiteira/kissFoto.png'
}
