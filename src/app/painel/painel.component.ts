import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase';
  public resposta: string = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(param: Event): void {
    this.resposta = (<HTMLInputElement>param.target).value;
    // console.log(this.resposta);
  }

  public verificarResposta(): void {
    // console.log('Verificar resposta', this.resposta);
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta');
      this.rodada++;

      this.progresso = this.progresso + (100 / this.frases.length);

      this.atualizaRodada();

    } else {
      alert('Deu ruim parça');
    }

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
