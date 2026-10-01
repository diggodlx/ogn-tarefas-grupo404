import { Component } from '@angular/core';

@Component({
  selector: 'app-et6',
  standalone: false,
  templateUrl: './et6.html',
  styleUrl: './et6.scss',
})
export class Et6 {
   listaInicial: string[] = ['João', 'Maria', 'Carlos', 'Ana'];

  nomes: string[] = [...this.listaInicial];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }
}
