import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASE1, FRASE2, FRASE3, FRASE4 } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases = [FRASE1, FRASE2, FRASE3, FRASE4];
  public instrucao = 'Traduza a frase';
  public resposta;

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit () {
    this.resposta = '';
  }

  ngOnDestroy () {}

  public atualizaResposta(mensagem: Event): void {
    this.resposta = (<HTMLInputElement>mensagem.target).value;
    // console.log(this.resposta);
  }

  public verificarResposta(): void {
    // console.log('Verificar resposta', this.resposta);
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;

      this.progresso = this.progresso + (100 / this.frases.length);

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();

    } else {
      // alert('Deu ruim parça');
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
