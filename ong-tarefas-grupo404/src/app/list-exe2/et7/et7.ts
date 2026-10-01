import { Component } from '@angular/core';

@Component({
  selector: 'app-et7',
  standalone: false,
  templateUrl: './et7.html',
  styleUrl: './et7.scss',
})
export class Et7 {

  disciplinas = [
    'Programação Web',
    'Banco de Dados',
    'Engenharia de Software',
    'Redes de Computadores',
    'Estrutura de Dados',
    'Sistemas Operacionais'
  ];
}
