import { Component } from '@angular/core';

@Component({
  selector: 'app-exe8',
  standalone: false,
  templateUrl: './exe8.html',
  styleUrl: './exe8.scss',
})
export class Exe8 {

  produto = 'Mouse Gamer';
  preco =  150;
  quantidade =2;

  get total(): number  {
    return this.preco * this.quantidade;
  }
}
