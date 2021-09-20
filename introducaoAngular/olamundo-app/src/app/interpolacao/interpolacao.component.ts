import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {
  nome: String = "3DD1 - EDDY";
  imageURL: string = "https://i.pinimg.com/originals/e8/83/5f/e8835fd3246f901dc1bae85717dbb875.jpg";
  textoQualquer: String = "Texto qualquer";

  constructor() { }

  ngOnInit(): void {
  }

  getIdade(): number {
    return 92;
  }

  getNumeroAleatorio() : number {
      return Math.random();
  }
}
