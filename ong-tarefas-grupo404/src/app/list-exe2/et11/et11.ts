import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-et11',
  standalone: false,
  templateUrl: './et11.html',
  styleUrl: './et11.scss',
})
export class Et11 {

  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Mouse Gamer',
      preco: 120,
      quantidade: 10,
      promocao: true
    },
    {
      id: 2,
      nome: 'Teclado Mecânico',
      preco: 250,
      quantidade: 5,
      promocao: false
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 850,
      quantidade: 0,
      promocao: true
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 180,
      quantidade: 8,
      promocao: false
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 200,
      quantidade: 3,
      promocao: true
    }
  ];
}
