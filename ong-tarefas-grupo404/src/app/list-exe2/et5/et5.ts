import { Component } from '@angular/core';

@Component({
  selector: 'app-et5',
  standalone: false,
  templateUrl: './et5.html',
  styleUrl: './et5.scss',
})
export class Et5 {

   nomesIniciais = [
    'João',
    'Maria',
    'Carlos',
    'Ana',
    'Pedro'
  ];

  nomes = [...this.nomesIniciais];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.nomesIniciais];
  }

}
