import { Component } from '@angular/core';

@Component({
  selector: 'app-et12',
  standalone: false,
  templateUrl: './et12.html',
  styleUrl: './et12.scss',
})
export class Et12 {
    nomeProduto: string = '';
  quantidade: number | null = null;

  mensagem: string = '';

  produtos: { nome: string, quantidade: number }[] = [];

  cadastrar() {

    if (this.nomeProduto.trim() === '' || this.quantidade === null || this.quantidade < 0) {
      this.mensagem = 'Não foi possível cadastrar o produto. Preencha os campos corretamente.';
      return;
    }

    this.produtos.push({
      nome: this.nomeProduto,
      quantidade: this.quantidade
    });

    this.nomeProduto = '';
    this.quantidade = null;
    this.mensagem = '';
  }

  excluir(index: number) {
    this.produtos.splice(index, 1);
  }
}
