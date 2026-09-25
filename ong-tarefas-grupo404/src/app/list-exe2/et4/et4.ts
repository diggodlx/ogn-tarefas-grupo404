import { Component } from '@angular/core';

@Component({
  selector: 'app-et4',
  standalone: false,
  templateUrl: './et4.html',
  styleUrl: './et4.scss',
})
export class Et4 {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionar() {
    this.quantidadeEstoque++;
  }

  remover() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
