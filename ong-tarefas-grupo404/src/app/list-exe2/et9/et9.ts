import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-et9',
  standalone: false,
  templateUrl: './et9.html',
  styleUrl: './et9.scss',
})
export class Et9 {

    produtos: Produto[] = [
    { id: 1, nome: 'Mouse Gamer', preco: 120, quantidade: 10 },
    { id: 2, nome: 'Teclado Mecânico', preco: 250, quantidade: 5 },
    { id: 3, nome: 'Monitor', preco: 850, quantidade: 0 },
    { id: 4, nome: 'Headset', preco: 180, quantidade: 8 },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 3 }
  ];
}
