import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-et8',
  standalone: false,
  templateUrl: './et8.html',
  styleUrl: './et8.scss',
})
export class Et8 {

  produtos: Produto[] = [
    { id: 1, nome: 'Mouse Gamer', preco: 120, quantidade: 10 },
    { id: 2, nome: 'Teclado Mecânico', preco: 250, quantidade: 5 },
    { id: 3, nome: 'Monitor', preco: 850, quantidade: 3 },
    { id: 4, nome: 'Headset', preco: 180, quantidade: 8 },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 4 }
  ];
}
