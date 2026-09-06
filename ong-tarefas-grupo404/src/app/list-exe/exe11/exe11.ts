import { Component } from '@angular/core';

@Component({
  selector: 'app-exe11',
  standalone: false,
  templateUrl: './exe11.html',
  styleUrl: './exe11.scss',
})
export class Exe11 {
  
   produto: string = '';
  preco: number = 0;
  quantidade: number = 0;
  mensagem: string = '';

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  get total(): number {
    return this.preco * this.quantidade;
  }

  adicionarAoCarrinho() {
    this.mensagem = `${this.quantidade} unidade(s) de ${this.produto} adicionada(s) ao carrinho!`;
  }
}
