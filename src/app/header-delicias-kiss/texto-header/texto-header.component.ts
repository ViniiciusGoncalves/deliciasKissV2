import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-header',
  templateUrl: './texto-header.component.html',
  styleUrls: ['./texto-header.component.css']
})
export class TextoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  headerOndas:String = 'assets/imagens/Header/headerOndas.svg'
}
